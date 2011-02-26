/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var T_NX = require('../core');
var T_Array = require('../Array');
var T_Function = require('../Function');
var T_Class = require('../Class');

// }}}
// {{{ NX.ClassManager

var T_ClassManager = module.exports = {

    // {{{ classes

    /**
     * @prop classes
     * @private
     */
    classes: {},

    // }}}
    // {{{ private

    /**
     * @prop existCache
     * @private
     */
    existCache: {},

    // }}}
    // {{{ namespaceRewrites

    /**
     * @prop namespaceRewrites
     * @private
     */
    namespaceRewrites: [{
        from: 'NX.',
        to: T_NX
    }],

    // }}}
    // {{{ maps

    /**
     * @prop maps
     * @private
     */
    maps: {
        alternateToName: {},
        aliasToName: {},
        nameToAliases: {}
    },

    // }}}
    // {{{ exist

    /**
     * @method exist
     */
    exist: function(className) {

        var i, ln, part, root, parts;

        if(!className) {
            return false;
        }

        if(T_NX.isArray(className)) {
            for(i = 0; i < className.length; i++) {
                if(!this.exist.call(this, className[i])) {
                    return false;
                }
            }

            return true;
        }

        if (!T_NX.isString(className)) {
            throw new Error("[NX.ClassManager.exist] Invalid classname, must be a string");
        }

        if(this.classes.hasOwnProperty(className) || this.existCache.hasOwnProperty(className)) {
            return true;
        }

        root = global;
        parts = this.parseNamespace(className);

        for(i = 0, ln = parts.length; i < ln; i++) {
            part = parts[i];

            if(!T_NX.isString(part)) {
                root = part;
            } else {
                if(!root || !root[part]) {
                    return false;
                }

                root = root[part];
            }
        }

        // TODO:Loaderの扱いをどうするか？
        T_Loader.historyPush(className);

        this.existCache[className] = true;

        return true;
    },

    // }}}
    // {{{ parseNamespace

    /**
     * @method parseNamespace
     */
    parseNamespace: function(namespace) {

        if(!T_NX.isString(namespace)) {
            throw new Error("[NX.ClassManager.parseNamespace] namespace must be a string");
        }

        var parts = [],
            rewrites = this.namespaceRewrites,
            rewrite, from, to, i, ln, root = global;

        for(i = 0, ln = rewrites.length; i < ln; i++) {
            rewrite = rewrites[i];
            from = rewrite.from;
            to = rewrite.to;

            if(namespace === from || namespace.substring(0, from.length) === from) {
                namespace = namespace.substring(from.length);

                if(!T_NX.isString(to)) {
                    root = to;
                } else {
                    parts = parts.concat(to.split('.'));
                }

                break;
            }
        }

        parts.push(root);

        parts = parts.concat(namespace.split('.'));

        return T_Array.clean(parts);
    },

    // }}}
    // {{{ assignNamespace

    /**
     * @method assignNamespace
     */
    assignNamespace: function(name, value) {

        var root = global,
            parts = this.parseNamespace(name),
            leaf = parts.pop(),
            i, ln, part;

        for(i = 0, ln = parts.length; i < ln; i++) {
            part = parts[i];

            if(!T_NX.isString(part)) {
                root = part;
            } else {
                if(!root[part]) {
                    root[part] = {};
                }

                root = root[part];
            }
        }

        root[leaf] = value;

        return root[leaf];
    },

    // }}}
    // {{{ createNamespaces

    /**
     * @method createNamespaces
     */
    createNamespaces: function() {

        var root = global,
            namespaces = T_Array.toArray(arguments),
            parts, part, i, j, ln, subLn;

        for(i = 0, ln = namespaces.length; i < ln; i++) {

            parts = this.parseNamespace(namespaces[i]);

            for(j = 0, subLn = parts.length; j < subLn; j++) {
                part = parts[j];

                if(!T_NX.isString(part)) {
                    root = part;
                } else {
                    if(!root[part]) {
                        root[part] = {};
                    }

                    root = root[part];
                }
            }
        }

        return root;
    },

    // }}}
    // {{{ set

    /**
     * @method set
     */
    set: function(name, value) {

        var targetName = this.getName(value);

        this.classes[name] = this.assignNamespace(name, value);

        if(targetName && targetName !== name) {
            this.maps.alternateToName[name] = targetName;
        }

        return this;
    },

    // }}}
    // {{{ get

    /**
     * @method get
     */
    get: function(name) {

        if(this.classes.hasOwnProperty(name)) {
            return this.classes[name];
        }

        var root = global,
        parts = this.parseNamespace(name),
        part, i, ln;

        for(i = 0, ln = parts.length; i < ln; i++) {
            part = parts[i];

            if(!T_NX.isString(part)) {
                root = part;
            } else {
                if(!root || !root[part]) {
                    return null;
                }

                root = root[part];
            }
        }

        return root;
    },

    // }}}
    // {{{ setAlias

    /**
     * @method setAlias
     */
    setAlias: function(cls, alias) {

        var aliasToNameMap = this.maps.aliasToName,
            nameToAliasesMap = this.maps.nameToAliases,
            className;

        if(T_NX.isString(cls)) {
            className = cls;
        } else {
            className = this.getName(cls);
        }

        if(alias && aliasToNameMap[alias] !== className) {

            if(aliasToNameMap.hasOwnProperty(alias) && T_NX.isDefined(window.console)) {

                console.log("[NX.ClassManager] Overriding already existed alias: '" + alias + "' " +
                            "of: '" + aliasToNameMap[alias] + "' with: '" + className + "'. Be sure it's intentional.");

            }

            aliasToNameMap[alias] = className;
        }

        if(!nameToAliasesMap[className]) {
            nameToAliasesMap[className] = [];
        }

        if(alias) {
            T_Array.include(nameToAliasesMap[className], alias);
        }

        return this;
    },

    // }}}
    // {{{ getByAlias

    /**
     * @method getByAlias
     */
    getByAlias: function(alias) {
        return this.get(this.getNameByAlias(alias));
    },

    // }}}
    // {{{ getNameByAlias

    /**
     * @method getNameByAlias
     */
    getNameByAlias: function(alias) {
        return this.maps.aliasToName[alias] || '';
    },

    // }}}
    // {{{ getNameByAlternate

    /**
     * @method getNameByAlternate
     */
    getNameByAlternate: function(alternate) {
        return this.maps.alternateToName[alternate] || '';
    },

    // }}}
    // {{{ getAliasesByName

    /**
     * @method getAliasesByName
     */
    getAliasesByName: function(name) {
        return this.maps.nameToAliases[name] || [];
    },

    // }}}
    // {{{ getName

    /**
     * @method getName
     */
    getName: function(object) {
        return object && object.$className || '';
    },

    // }}}
    // {{{ getClass

    /**
     * @method getClass
     */
    getClass: function(object) {
        return object && object.self || null;
    },

    // }}}
    // {{{ create

    /**
     * @method create
     */
    create: function(className, data, createdFn) {

        var manager = this;

        if(!T_NX.isString(className)) {
            throw new Error("[NX.define] Invalid class name of: '" + className + "', must be a valid string");
        }

        data.$className = className;

        return new T_Class(data, function() {

            var postprocessors = T_Array.from(data.postprocessors || manager.getDefaultPostprocessors());
            var process = function(clsName, cls, clsData) {

                var name = postprocessors.shift();

                if(!name) {

                    manager.set(className, cls);

                    if(T_NX.isFunction(createdFn)) {
                        createdFn.call(cls, cls);
                    }

                    return;
                }

                this.getPostprocessor(name).call(this, clsName, cls, clsData, process);
            };

            process.call(manager, className, this, data);
        });
    },

    // }}}
    // {{{ instantiateByAlias

    /**
     * @method instantiateByAlias
     */
    instantiateByAlias: function() {

        var args = T_Array.toArray(arguments),
            alias = args.shift(),
            className = this.getNameByAlias(alias);

        if(!className) {
            className = this.maps.aliasToName[alias];

            if(!className) {
                throw new Error("[NX.ClassManager] Cannot create an instance of unrecognized alias: " + alias);
            }

            if (T_NX.isDefined(window.console)) {
                console.warn("[NX.Loader] Synchronously loading '" + className + "'; consider adding " +
                             "NX.require('" + alias + "') above NX.onReady");
            }

            T_Loader.enableSyncMode(true);
            T_NX.require(className, function() {
                T_Loader.triggerReady();
                T_Loader.enableSyncMode(false);
            });
        }

        args.unshift(className);

        return this.instantiate.apply(this, args);
    },

    // }}}
    // {{{ instantiate

    /**
     * @method instantiate
     */
    instantiate: function() {

        var args = T_Array.toArray(arguments),
            name = args.shift(),
            alias = name,
            temp = function() {},
            possibleName, cls, constructor, instanceCls;

        if(!T_NX.isString(name) || name.length < 1) {
            throw new Error("[NX.create] Invalid class name or alias: '" + name + "', must be a valid string");
        }

        cls = this.get(name);

        if(!cls) {
            possibleName = this.getNameByAlias(name);

            if(possibleName) {
                name = possibleName;
                cls = this.get(name);
            }
        }

        if(!cls) {
            possibleName = this.getNameByAlternate(name);

            if(possibleName) {
                name = possibleName;
                cls = this.get(name);
            }
        }

        if(!cls) {

            if(T_NX.isDefined(window.console)) {
                console.warn("[NX.Loader] Synchronously loading '" + name + "'; consider adding " +
                             "NX.require('" + ((possibleName) ? alias : name) + "') above NX.onReady");
            }

            T_Loader.enableSyncMode(true);

            T_NX.require(name, function() {
                T_Loader.triggerReady();
                T_Loader.enableSyncMode(false);
            });

            cls = this.get(name);
        }

        if(!cls) {
            throw new Error("[NX.ClassManager] Cannot create an instance of unrecognized class name / alias: " + alias);
        }

        if (!T_NX.isFunction(cls)) {
            throw new Error("[NX.create] '" + name + "' is a singleton and cannot be instantiated");
        }

        constructor = cls.prototype.constructor;

        instanceCls = function() {
            return constructor.apply(this, args);
        };

        temp.prototype = cls.prototype;
        instanceCls.prototype = new temp();
        instanceCls.prototype.constructor = instanceCls;

        return new instanceCls();
    },

    // }}}
    // {{{ postprocessor

    /**
     * @prop postprocessor
     * @private
     */
    postprocessors: {},

    // }}}
    // {{{ registerPostprocessor

    /**
     * @method registerPostprocessor
     */
    registerPostprocessor: T_Function.flexSetter(function(name, fn) {

        this.postprocessors[name] = fn;
        return this;
    }),

    // }}}
    // {{{ getPostprocessor

    /**
     * @method getPostprocessor
     */
    getPostprocessor: function(name) {
        return this.postprocessors[name];
    },

    // }}}
    // {{{ getDefaultPostprocessors

    /**
     * @method getDefaultPostprocessors
     */
    getDefaultPostprocessors: function() {
        return this.defaultPostprocessors || [];
    },

    // }}}
    // {{{ setDefaultPreprocessors

    /**
     * @method setDefaultPostprocessors
     */
    setDefaultPostprocessors: function(postprocessors) {
        this.defaultPostprocessors = T_Array.from(postprocessors);
        return this;
    },

    // }}}
    // {{{ insertDefaultPreprocessor

    /**
     * @method insertDefaultPreprocessor
     */
    insertDefaultPostprocessor: function(name, offset, relativeName) {

        var defaultPostprocessors = this.defaultPostprocessors,
            index;

        if(T_NX.isString(offset)) {
            if(offset === 'first') {
                defaultPostprocessors.unshift(name);
                return this;
            } else if (offset === 'last') {
                defaultPostprocessors.push(name);
                return this;
            }

            offset = (offset === 'after') ? 1 : -1;
        }

        index = T_Array.indexOf(defaultPostprocessors, relativeName);

        if(index !== -1) {
            defaultPostprocessors.splice(Math.max(0, index + offset), 0, name);
        }

        return this;
    },

    // }}}
    // {{{ getNamesByExpression

    /**
     * @method getNamesByExpression
     */
    getNamesByExpression: function(expression) {

        var nameToAliasesMap = this.maps.nameToAliases,
            names = [],
            name, alias, aliases, possibleName, regex, i, ln;

        if(!T_NX.isString(expression) || expression.length < 1) {
            throw new Error("[NX.ClassManager.getNamesByExpression] expression must be a valid string");
        }

        if(expression.indexOf('*') !== -1) {
            expression = expression.replace(/\*/g, '(.*?)');
            regex = new RegExp('^' + expression + '$');

            for(name in nameToAliasesMap) {
                if(nameToAliasesMap.hasOwnProperty(name)) {
                    aliases = nameToAliasesMap[name];

                    if(name.search(regex) !== -1) {
                        names.push(name);
                    } else {
                        for(i = 0, ln = aliases.length; i < ln; i++) {
                            alias = aliases[i];

                            if(alias.search(regex) !== -1) {
                                names.push(name);
                                break;
                            }
                        }
                    }
                }
            }

        } else {

            possibleName = this.getNameByAlias(expression);

            if(possibleName) {
                names.push(possibleName);
            } else {
                possibleName = this.getNameByAlternate(expression);

                if(possibleName) {
                    names.push(possibleName);
                } else {
                    names.push(expression);
                }
            }
        }

        return names;
    }

    // }}}

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
