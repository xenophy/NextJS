/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.Loader

NX.Loader = {
    requiresMap: {}

};
//NX.$implements(__dirname + '/ClassManager/', NX.Loader);

/*
(function(Manager, Class, flexSetter, alias) {

    var
        //<if nonBrowser>
        isNonBrowser = typeof window === 'undefined',
        isNodeJS = isNonBrowser && (typeof require === 'function'),
        isPhantomJS = (typeof phantom !== 'undefined' && phantom.fs),
        //</if>
        dependencyProperties = ['extend', 'mixins', 'requires'],
        Loader;

    Loader = Ext.Loader = {

        documentHead: typeof document !== 'undefined' && (document.head || document.getElementsByTagName('head')[0]),

        isLoading: false,

        queue: [],

        isFileLoaded: {},

        readyListeners: [],

        optionalRequires: [],

        requiresMap: {},

        numPendingFiles: 0,

        numLoadedFiles: 0,

        hasFileLoadError: false,

        classNameToFilePathMap: {},

        history: [],

        config: {

            enabled: false,

            disableCaching: true,

            disableCachingParam: '_dc',

            paths: {
                'Ext': '.'
            }
        },

        setConfig: function(name, value) {
            if (Ext.isObject(name) && arguments.length === 1) {
                Ext.Object.merge(this.config, name);
            }
            else {
                this.config[name] = (Ext.isObject(value)) ? Ext.Object.merge(this.config[name], value) : value;
            }

            return this;
        },

        getConfig: function(name) {
            if (name) {
                return this.config[name];
            }

            return this.config;
        },

        setPath: flexSetter(function(name, path) {
            //<if nonBrowser>
            if (isNonBrowser) {
                if (isNodeJS) {
                    path = require('fs').realpathSync(path);
                }
            }
            //</if>
            this.config.paths[name] = path;

            return this;
        }),

        getPath: function(className) {
            var path = '',
                paths = this.config.paths,
                prefix = this.getPrefix(className);

            if (prefix.length > 0) {
                if (prefix === className) {
                    return paths[prefix];
                }

                path = paths[prefix];
                className = className.substring(prefix.length + 1);
            }

            if (path.length > 0) {
                path += '/';
            }

            return path.replace(/\/\.\//g, '/') + className.replace(/\./g, "/") + '.js';
        },

        getPrefix: function(className) {
            var paths = this.config.paths,
                prefix, deepestPrefix = '';

            if (paths.hasOwnProperty(className)) {
                return className;
            }

            for (prefix in paths) {
                if (paths.hasOwnProperty(prefix) && prefix + '.' === className.substring(0, prefix.length + 1)) {
                    if (prefix.length > deepestPrefix.length) {
                        deepestPrefix = prefix;
                    }
                }
            }

            return deepestPrefix;
        },

        refreshQueue: function() {
            var ln = this.queue.length,
                i, item, j, requires;

            if (ln === 0) {
                this.triggerReady();
                return;
            }

            for (i = 0; i < ln; i++) {
                item = this.queue[i];

                if (item) {
                    requires = item.requires;

                    // Don't bother checking when the number of files loaded
                    // is still less than the array length
                    if (requires.length > this.numLoadedFiles) {
                        continue;
                    }

                    j = 0;

                    do {
                        if (Manager.isCreated(requires[j])) {
                            // Take out from the queue
                            Ext.Array.erase(requires, j, 1);
                        }
                        else {
                            j++;
                        }
                    } while (j < requires.length);

                    if (item.requires.length === 0) {
                        Ext.Array.erase(this.queue, i, 1);
                        item.callback.call(item.scope);
                        this.refreshQueue();
                        break;
                    }
                }
            }

            return this;
        },

        injectScriptElement: function(url, onLoad, onError, scope) {
            var script = document.createElement('script'),
                me = this,
                onLoadFn = function() {
                    me.cleanupScriptElement(script);
                    onLoad.call(scope);
                },
                onErrorFn = function() {
                    me.cleanupScriptElement(script);
                    onError.call(scope);
                };

            script.type = 'text/javascript';
            script.src = url;
            script.onload = onLoadFn;
            script.onerror = onErrorFn;
            script.onreadystatechange = function() {
                if (this.readyState === 'loaded' || this.readyState === 'complete') {
                    onLoadFn();
                }
            };

            this.documentHead.appendChild(script);

            return script;
        },

        cleanupScriptElement: function(script) {
            script.onload = null;
            script.onreadystatechange = null;
            script.onerror = null;

            return this;
        },

        loadScriptFile: function(url, onLoad, onError, scope, synchronous) {
            var me = this,
                noCacheUrl = url + (this.getConfig('disableCaching') ? ('?' + this.getConfig('disableCachingParam') + '=' + Ext.Date.now()) : ''),
                fileName = url.split('/').pop(),
                isCrossOriginRestricted = false,
                xhr, status, onScriptError;

            scope = scope || this;

            this.isLoading = true;

            if (!synchronous) {
                onScriptError = function() {
                    onError.call(scope, "Failed loading '" + url + "', please verify that the file exists", synchronous);
                };

                if (!Ext.isReady && Ext.onDocumentReady) {
                    Ext.onDocumentReady(function() {
                        me.injectScriptElement(noCacheUrl, onLoad, onScriptError, scope);
                    });
                }
                else {
                    this.injectScriptElement(noCacheUrl, onLoad, onScriptError, scope);
                }
            }
            else {
                if (typeof XMLHttpRequest !== 'undefined') {
                    xhr = new XMLHttpRequest();
                } else {
                    xhr = new ActiveXObject('Microsoft.XMLHTTP');
                }

                try {
                    xhr.open('GET', noCacheUrl, false);
                    xhr.send(null);
                } catch (e) {
                    isCrossOriginRestricted = true;
                }

                status = (xhr.status === 1223) ? 204 : xhr.status;

                if (!isCrossOriginRestricted) {
                    isCrossOriginRestricted = (status === 0);
                }

                if (isCrossOriginRestricted
                //<if isNonBrowser>
                && !isPhantomJS
                //</if>
                ) {
                    onError.call(this, "Failed loading synchronously via XHR: '" + url + "'; It's likely that the file is either " +
                                       "being loaded from a different domain or from the local file system whereby cross origin " +
                                       "requests are not allowed due to security reasons. Use asynchronous loading with " +
                                       "Ext.require instead.", synchronous);
                }
                else if (status >= 200 && status < 300
                //<if isNonBrowser>
                || isPhantomJS
                //</if>
                ) {
                    // Firebug friendly, file names are still shown even though they're eval'ed code
                    new Function(xhr.responseText + "\n//@ sourceURL=" + fileName)();

                    onLoad.call(scope);
                }
                else {
                    onError.call(this, "Failed loading synchronously via XHR: '" + url + "'; please " +
                                       "verify that the file exists. " +
                                       "XHR status code: " + status, synchronous);
                }

                // Prevent potential IE memory leak
                xhr = null;
            }
        },

        exclude: function(excludes) {
            var me = this;

            return {
                require: function(expressions, fn, scope) {
                    return me.require(expressions, fn, scope, excludes);
                },

                syncRequire: function(expressions, fn, scope) {
                    return me.syncRequire(expressions, fn, scope, excludes);
                }
            };
        },

        syncRequire: function() {
            this.syncModeEnabled = true;
            this.require.apply(this, arguments);
            this.refreshQueue();
            this.syncModeEnabled = false;
        },

        require: function(expressions, fn, scope, excludes) {
            var filePath, expression, exclude, className, excluded = {},
                excludedClassNames = [],
                possibleClassNames = [],
                possibleClassName, classNames = [],
                i, j, ln, subLn;

            expressions = Ext.Array.from(expressions);
            excludes = Ext.Array.from(excludes);

            fn = fn || Ext.emptyFn;

            scope = scope || Ext.global;

            for (i = 0, ln = excludes.length; i < ln; i++) {
                exclude = excludes[i];

                if (typeof exclude === 'string' && exclude.length > 0) {
                    excludedClassNames = Manager.getNamesByExpression(exclude);

                    for (j = 0, subLn = excludedClassNames.length; j < subLn; j++) {
                        excluded[excludedClassNames[j]] = true;
                    }
                }
            }

            for (i = 0, ln = expressions.length; i < ln; i++) {
                expression = expressions[i];

                if (typeof expression === 'string' && expression.length > 0) {
                    possibleClassNames = Manager.getNamesByExpression(expression);

                    for (j = 0, subLn = possibleClassNames.length; j < subLn; j++) {
                        possibleClassName = possibleClassNames[j];

                        if (!excluded.hasOwnProperty(possibleClassName) && !Manager.isCreated(possibleClassName)) {
                            Ext.Array.include(classNames, possibleClassName);
                        }
                    }
                }
            }

            // If the dynamic dependency feature is not being used, throw an error
            // if the dependencies are not defined
            if (!this.config.enabled) {
                if (classNames.length > 0) {
                    Ext.Error.raise({
                        sourceClass: "Ext.Loader",
                        sourceMethod: "require",
                        msg: "Ext.Loader is not enabled, so dependencies cannot be resolved dynamically. " +
                             "Missing required class" + ((classNames.length > 1) ? "es" : "") + ": " + classNames.join(', ')
                    });
                }
            }

            if (classNames.length === 0) {
                fn.call(scope);
                return this;
            }

            this.queue.push({
                requires: classNames,
                callback: fn,
                scope: scope
            });

            classNames = classNames.slice();

            for (i = 0, ln = classNames.length; i < ln; i++) {
                className = classNames[i];

                if (!this.isFileLoaded.hasOwnProperty(className)) {
                    this.isFileLoaded[className] = false;

                    filePath = this.getPath(className);

                    this.classNameToFilePathMap[className] = filePath;

                    this.numPendingFiles++;

                    //<if nonBrowser>
                    if (isNonBrowser) {
                        if (isNodeJS) {
                            require(filePath);
                        }
                        // Temporary support for hammerjs
                        else {
                            var f = fs.open(filePath),
                                content = '',
                                line;

                            while (true) {
                                line = f.readLine();
                                if (line.length === 0) {
                                    break;
                                }
                                content += line;
                            }

                            f.close();
                            eval(content);
                        }

                        this.onFileLoaded(className, filePath);

                        if (ln === 1) {
                            return Manager.get(className);
                        }

                        continue;
                    }
                    //</if>
                    this.loadScriptFile(
                        filePath,
                        Ext.Function.pass(this.onFileLoaded, [className, filePath], this),
                        Ext.Function.pass(this.onFileLoadError, [className, filePath]),
                        this,
                        this.syncModeEnabled
                    );
                }
            }

            return this;
        },

        onFileLoaded: function(className, filePath) {
            this.numLoadedFiles++;

            this.isFileLoaded[className] = true;

            this.numPendingFiles--;

            if (this.numPendingFiles === 0) {
                this.refreshQueue();
            }

            //<debug>
            if (this.numPendingFiles <= 1) {
                window.status = "Finished loading all dependencies, onReady fired!";
            }
            else {
                window.status = "Loading dependencies, " + this.numPendingFiles + " files left...";
            }
            //</debug>

            //<debug>
            if (!this.syncModeEnabled && this.numPendingFiles === 0 && this.isLoading && !this.hasFileLoadError) {
                var queue = this.queue,
                    requires,
                    i, ln, j, subLn, missingClasses = [], missingPaths = [];

                for (i = 0, ln = queue.length; i < ln; i++) {
                    requires = queue[i].requires;

                    for (j = 0, subLn = requires.length; j < ln; j++) {
                        if (this.isFileLoaded[requires[j]]) {
                            missingClasses.push(requires[j]);
                        }
                    }
                }

                if (missingClasses.length < 1) {
                    return;
                }

                missingClasses = Ext.Array.filter(missingClasses, function(item) {
                    return !this.requiresMap.hasOwnProperty(item);
                }, this);

                for (i = 0,ln = missingClasses.length; i < ln; i++) {
                    missingPaths.push(this.classNameToFilePathMap[missingClasses[i]]);
                }

                Ext.Error.raise({
                    sourceClass: "Ext.Loader",
                    sourceMethod: "onFileLoaded",
                    msg: "The following classes are not declared even if their files have been " +
                            "loaded: '" + missingClasses.join("', '") + "'. Please check the source code of their " +
                            "corresponding files for possible typos: '" + missingPaths.join("', '") + "'"
                });
            }
            //</debug>
        },

        onFileLoadError: function(className, filePath, errorMessage, isSynchronous) {
            this.numPendingFiles--;
            this.hasFileLoadError = true;

            //<debug error>
            Ext.Error.raise({
                sourceClass: "Ext.Loader",
                classToLoad: className,
                loadPath: filePath,
                loadingType: isSynchronous ? 'synchronous' : 'async',
                msg: errorMessage
            });
            //</debug>
        },

        addOptionalRequires: function(requires) {
            var optionalRequires = this.optionalRequires,
                i, ln, require;

            requires = Ext.Array.from(requires);

            for (i = 0, ln = requires.length; i < ln; i++) {
                require = requires[i];

                Ext.Array.include(optionalRequires, require);
            }

            return this;
        },

        triggerReady: function(force) {
            var readyListeners = this.readyListeners,
                optionalRequires, listener;

            if (this.isLoading || force) {
                this.isLoading = false;

                if (this.optionalRequires.length) {
                    // Clone then empty the array to eliminate potential recursive loop issue
                    optionalRequires = Ext.Array.clone(this.optionalRequires);

                    // Empty the original array
                    this.optionalRequires.length = 0;

                    this.require(optionalRequires, Ext.Function.pass(this.triggerReady, [true], this), this);
                    return this;
                }

                while (readyListeners.length) {
                    listener = readyListeners.shift();
                    listener.fn.call(listener.scope);

                    if (this.isLoading) {
                        return this;
                    }
                }
            }

            return this;
        },

        onReady: function(fn, scope, withDomReady, options) {
            var oldFn;

            if (withDomReady !== false && Ext.onDocumentReady) {
                oldFn = fn;

                fn = function() {
                    Ext.onDocumentReady(oldFn, scope, options);
                };
            }

            if (!this.isLoading) {
                fn.call(scope);
            }
            else {
                this.readyListeners.push({
                    fn: fn,
                    scope: scope
                });
            }
        },

        historyPush: function(className) {
            if (className && this.isFileLoaded.hasOwnProperty(className)) {
                Ext.Array.include(this.history, className);
            }

            return this;
        }
    };

    Ext.require = alias(Loader, 'require');

    Ext.syncRequire = alias(Loader, 'syncRequire');

    Ext.exclude = alias(Loader, 'exclude');

    Ext.onReady = function(fn, scope, options) {
        Loader.onReady(fn, scope, true, options);
    };

    Class.registerPreprocessor('loader', function(cls, data, continueFn) {
        var me = this,
            dependencies = [],
            className = Manager.getName(cls),
            i, j, ln, subLn, value, propertyName, propertyValue;

        for (i = 0, ln = dependencyProperties.length; i < ln; i++) {
            propertyName = dependencyProperties[i];

            if (data.hasOwnProperty(propertyName)) {
                propertyValue = data[propertyName];

                if (typeof propertyValue === 'string') {
                    dependencies.push(propertyValue);
                }
                else if (propertyValue instanceof Array) {
                    for (j = 0, subLn = propertyValue.length; j < subLn; j++) {
                        value = propertyValue[j];

                        if (typeof value === 'string') {
                            dependencies.push(value);
                        }
                    }
                }
                else {
                    for (j in propertyValue) {
                        if (propertyValue.hasOwnProperty(j)) {
                            value = propertyValue[j];

                            if (typeof value === 'string') {
                                dependencies.push(value);
                            }
                        }
                    }
                }
            }
        }

        if (dependencies.length === 0) {
//            Loader.historyPush(className);
            return;
        }

        //<debug error>
        var deadlockPath = [],
            requiresMap = Loader.requiresMap,
            detectDeadlock;

        if (className) {
            requiresMap[className] = dependencies;

            detectDeadlock = function(cls) {
                deadlockPath.push(cls);

                if (requiresMap[cls]) {
                    if (Ext.Array.contains(requiresMap[cls], className)) {
                        Ext.Error.raise({
                            sourceClass: "Ext.Loader",
                            msg: "Deadlock detected while loading dependencies! '" + className + "' and '" +
                                deadlockPath[1] + "' " + "mutually require each other. Path: " +
                                deadlockPath.join(' -> ') + " -> " + deadlockPath[0]
                        });
                    }

                    for (i = 0, ln = requiresMap[cls].length; i < ln; i++) {
                        detectDeadlock(requiresMap[cls][i]);
                    }
                }
            };

            detectDeadlock(className);
        }

        //</debug>

        Loader.require(dependencies, function() {
            for (i = 0, ln = dependencyProperties.length; i < ln; i++) {
                propertyName = dependencyProperties[i];

                if (data.hasOwnProperty(propertyName)) {
                    propertyValue = data[propertyName];

                    if (typeof propertyValue === 'string') {
                        data[propertyName] = Manager.get(propertyValue);
                    }
                    else if (propertyValue instanceof Array) {
                        for (j = 0, subLn = propertyValue.length; j < subLn; j++) {
                            value = propertyValue[j];

                            if (typeof value === 'string') {
                                data[propertyName][j] = Manager.get(value);
                            }
                        }
                    }
                    else {
                        for (var k in propertyValue) {
                            if (propertyValue.hasOwnProperty(k)) {
                                value = propertyValue[k];

                                if (typeof value === 'string') {
                                    data[propertyName][k] = Manager.get(value);
                                }
                            }
                        }
                    }
                }
            }

            continueFn.call(me, cls, data);
        });

        return false;
    }, true);

    Class.setDefaultPreprocessorPosition('loader', 'after', 'className');

    Manager.registerPostprocessor('uses', function(name, cls, data) {
        var uses = Ext.Array.from(data.uses),
            items = [],
            i, ln, item;

        for (i = 0, ln = uses.length; i < ln; i++) {
            item = uses[i];

            if (typeof item === 'string') {
                items.push(item);
            }
        }

        Loader.addOptionalRequires(items);
    });

    Manager.setDefaultPostprocessorPosition('uses', 'last');

})(Ext.ClassManager, Ext.Class, Ext.Function.flexSetter, Ext.Function.alias);



*/
/*
(function(Manager, Class, flexSetter, alias) {



})(NX.ClassManager, NX.Class, NX.Function.flexSetter, NX.Function.alias);
*/

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
