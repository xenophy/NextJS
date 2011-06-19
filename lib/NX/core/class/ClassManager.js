/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.ClassManager

(function(Class, alias) {

var slice = Array.prototype.slice;

var Manager = NX.ClassManager = {

    // {{{ classes

    classes: {},

    // }}}
    // {{{ existCache

    existCache: {},

    // }}}
    // {{{ namespaceRewrites

    namespaceRewrites: [{
        from: 'NX.',
        to: NX
    }],

    // }}}
    // {{{ maps

    maps: {
        alternateToName: {},
        aliasToName: {},
        nameToAliases: {}
    },

    // }}}
    // {{{ enableNamespaceParseCache

    enableNamespaceParseCache: true,

    // }}}
    // {{{ namespaceParseCache

    namespaceParseCache: {},

    // }}}
    // {{{ instantiators

    instantiators: [],

    // }}}
    // {{{ instantiationCounts

    instantiationCounts: {},

    // }}}
    // {{{ createNamespaces

    createNamespaces: function() {

        var root = NX.global,
            parts, part, i, j, ln, subLn;

        for (i = 0, ln = arguments.length; i < ln; i++) {

            parts = this.parseNamespace(arguments[i]);

            for (j = 0, subLn = parts.length; j < subLn; j++) {
                part = parts[j];

                if (typeof part !== 'string') {
                    root = part;
                } else {
                    if (!root[part]) {
                        root[part] = {};
                    }

                    root = root[part];
                }
            }
        }

        return root;
    },

    // }}}
    // {{{ parseNamespace

    parseNamespace: function(namespace) {

        if (typeof namespace !== 'string') {
            NX.Error.raise({
                sourceClass: "NX.ClassManager",
                sourceMethod: "parseNamespace",
                msg: "Invalid namespace, must be a string"
            });
        }

        var cache = this.namespaceParseCache;

        if (this.enableNamespaceParseCache) {
            if (cache.hasOwnProperty(namespace)) {
                return cache[namespace];
            }
        }

        var parts = [],
            rewrites = this.namespaceRewrites,
            rewrite, from, to, i, ln, root = NX.global;

        for (i = 0, ln = rewrites.length; i < ln; i++) {
            rewrite = rewrites[i];
            from = rewrite.from;
            to = rewrite.to;

            if (namespace === from || namespace.substring(0, from.length) === from) {
                namespace = namespace.substring(from.length);

                if (typeof to !== 'string') {
                    root = to;
                } else {
                    parts = parts.concat(to.split('.'));
                }

                break;
            }
        }

        parts.push(root);

        parts = parts.concat(namespace.split('.'));

        if (this.enableNamespaceParseCache) {
            cache[namespace] = parts;
        }

        return parts;
    },

    // }}}



/*



isCreated: function(className) {
var i, ln, part, root, parts;

//<debug error>
if (typeof className !== 'string' || className.length < 1) {
Ext.Error.raise({
sourceClass: "Ext.ClassManager",
sourceMethod: "exist",
msg: "Invalid classname, must be a string and must not be empty"
});
}
//</debug>

if (this.classes.hasOwnProperty(className) || this.existCache.hasOwnProperty(className)) {
return true;
}

root = Ext.global;
parts = this.parseNamespace(className);

for (i = 0, ln = parts.length; i < ln; i++) {
part = parts[i];

if (typeof part !== 'string') {
root = part;
} else {
if (!root || !root[part]) {
return false;
}

root = root[part];
}
}

Ext.Loader.historyPush(className);

this.existCache[className] = true;

return true;
},

        setNamespace: function(name, value) {
            var root = Ext.global,
                parts = this.parseNamespace(name),
                leaf = parts.pop(),
                i, ln, part;

            for (i = 0, ln = parts.length; i < ln; i++) {
                part = parts[i];

                if (typeof part !== 'string') {
                    root = part;
                } else {
                    if (!root[part]) {
                        root[part] = {};
                    }

                    root = root[part];
                }
            }

            root[leaf] = value;

            return root[leaf];
        },


        set: function(name, value) {
            var targetName = this.getName(value);

            this.classes[name] = this.setNamespace(name, value);

            if (targetName && targetName !== name) {
                this.maps.alternateToName[name] = targetName;
            }

            return this;
        },

        get: function(name) {
            if (this.classes.hasOwnProperty(name)) {
                return this.classes[name];
            }

            var root = Ext.global,
                parts = this.parseNamespace(name),
                part, i, ln;

            for (i = 0, ln = parts.length; i < ln; i++) {
                part = parts[i];

                if (typeof part !== 'string') {
                    root = part;
                } else {
                    if (!root || !root[part]) {
                        return null;
                    }

                    root = root[part];
                }
            }

            return root;
        },

        setAlias: function(cls, alias) {
            var aliasToNameMap = this.maps.aliasToName,
                nameToAliasesMap = this.maps.nameToAliases,
                className;

            if (typeof cls === 'string') {
                className = cls;
            } else {
                className = this.getName(cls);
            }

            if (alias && aliasToNameMap[alias] !== className) {
                //<debug info>
                if (aliasToNameMap.hasOwnProperty(alias) && Ext.isDefined(Ext.global.console)) {
                    Ext.global.console.log("[Ext.ClassManager] Overriding existing alias: '" + alias + "' " +
                        "of: '" + aliasToNameMap[alias] + "' with: '" + className + "'. Be sure it's intentional.");
                }
                //</debug>

                aliasToNameMap[alias] = className;
            }

            if (!nameToAliasesMap[className]) {
                nameToAliasesMap[className] = [];
            }

            if (alias) {
                Ext.Array.include(nameToAliasesMap[className], alias);
            }

            return this;
        },

        getByAlias: function(alias) {
            return this.get(this.getNameByAlias(alias));
        },

        getNameByAlias: function(alias) {
            return this.maps.aliasToName[alias] || '';
        },

        getNameByAlternate: function(alternate) {
            return this.maps.alternateToName[alternate] || '';
        },

        getAliasesByName: function(name) {
            return this.maps.nameToAliases[name] || [];
        },

        getName: function(object) {
            return object && object.$className || '';
        },

        getClass: function(object) {
            return object && object.self || null;
        },

        create: function(className, data, createdFn) {
            var manager = this;

            //<debug error>
            if (typeof className !== 'string') {
                Ext.Error.raise({
                    sourceClass: "Ext",
                    sourceMethod: "define",
                    msg: "Invalid class name '" + className + "' specified, must be a non-empty string"
                });
            }
            //</debug>

            data.$className = className;

            return new Class(data, function() {
                var postprocessorStack = data.postprocessors || manager.defaultPostprocessors,
                    registeredPostprocessors = manager.postprocessors,
                    index = 0,
                    postprocessors = [],
                    postprocessor, postprocessors, process, i, ln;

                delete data.postprocessors;

                for (i = 0, ln = postprocessorStack.length; i < ln; i++) {
                    postprocessor = postprocessorStack[i];

                    if (typeof postprocessor === 'string') {
                        postprocessor = registeredPostprocessors[postprocessor];

                        if (!postprocessor.always) {
                            if (data[postprocessor.name] !== undefined) {
                                postprocessors.push(postprocessor.fn);
                            }
                        }
                        else {
                            postprocessors.push(postprocessor.fn);
                        }
                    }
                    else {
                        postprocessors.push(postprocessor);
                    }
                }

                process = function(clsName, cls, clsData) {
                    postprocessor = postprocessors[index++];

                    if (!postprocessor) {
                        manager.set(className, cls);

                        Ext.Loader.historyPush(className);

                        if (createdFn) {
                            createdFn.call(cls, cls);
                        }

                        return;
                    }

                    if (postprocessor.call(this, clsName, cls, clsData, process) !== false) {
                        process.apply(this, arguments);
                    }
                };

                process.call(manager, className, this, data);
            });
        },

        instantiateByAlias: function() {
            var alias = arguments[0],
                args = slice.call(arguments),
                className = this.getNameByAlias(alias);

            if (!className) {
                className = this.maps.aliasToName[alias];

                //<debug error>
                if (!className) {
                    Ext.Error.raise({
                        sourceClass: "Ext",
                        sourceMethod: "createByAlias",
                        msg: "Cannot create an instance of unrecognized alias: " + alias
                    });
                }
                //</debug>

                //<debug warn>
                if (Ext.global.console) {
                    Ext.global.console.warn("[Ext.Loader] Synchronously loading '" + className + "'; consider adding " +
                         "Ext.require('" + alias + "') above Ext.onReady");
                }
                //</debug>

                Ext.syncRequire(className);
            }

            args[0] = className;

            return this.instantiate.apply(this, args);
        },

        instantiate: function() {
            var name = arguments[0],
                args = slice.call(arguments, 1),
                alias = name,
                possibleName, cls;

            if (typeof name !== 'function') {
                //<debug error>
                if ((typeof name !== 'string' || name.length < 1)) {
                    Ext.Error.raise({
                        sourceClass: "Ext",
                        sourceMethod: "create",
                        msg: "Invalid class name or alias '" + name + "' specified, must be a non-empty string"
                    });
                }
                //</debug>

                cls = this.get(name);
            }
            else {
                cls = name;
            }

            if (!cls) {
                possibleName = this.getNameByAlias(name);

                if (possibleName) {
                    name = possibleName;

                    cls = this.get(name);
                }
            }

            if (!cls) {
                possibleName = this.getNameByAlternate(name);

                if (possibleName) {
                    name = possibleName;

                    cls = this.get(name);
                }
            }

            if (!cls) {
                //<debug warn>
                if (Ext.global.console) {
                    Ext.global.console.warn("[Ext.Loader] Synchronously loading '" + name + "'; consider adding " +
                         "Ext.require('" + ((possibleName) ? alias : name) + "') above Ext.onReady");
                }
                //</debug>

                Ext.syncRequire(name);

                cls = this.get(name);
            }

            //<debug error>
            if (!cls) {
                Ext.Error.raise({
                    sourceClass: "Ext",
                    sourceMethod: "create",
                    msg: "Cannot create an instance of unrecognized class name / alias: " + alias
                });
            }

            if (typeof cls !== 'function') {
                Ext.Error.raise({
                    sourceClass: "Ext",
                    sourceMethod: "create",
                    msg: "'" + name + "' is a singleton and cannot be instantiated"
                });
            }
            //</debug>

            //<debug>
            if (!this.instantiationCounts[name]) {
                this.instantiationCounts[name] = 0;
            }

            this.instantiationCounts[name]++;
            //</debug>

            return this.getInstantiator(args.length)(cls, args);
        },

        dynInstantiate: function(name, args) {
            args = Ext.Array.from(args, true);
            args.unshift(name);

            return this.instantiate.apply(this, args);
        },

        getInstantiator: function(length) {
            if (!this.instantiators[length]) {
                var i = length,
                    args = [];

                for (i = 0; i < length; i++) {
                    args.push('a['+i+']');
                }

                this.instantiators[length] = new Function('c', 'a', 'return new c('+args.join(',')+')');
            }

            return this.instantiators[length];
        },

        postprocessors: {},

        defaultPostprocessors: [],

        registerPostprocessor: function(name, fn, always) {
            this.postprocessors[name] = {
                name: name,
                always: always ||  false,
                fn: fn
            };

            return this;
        },

        setDefaultPostprocessors: function(postprocessors) {
            this.defaultPostprocessors = Ext.Array.from(postprocessors);

            return this;
        },

        setDefaultPostprocessorPosition: function(name, offset, relativeName) {
            var defaultPostprocessors = this.defaultPostprocessors,
                index;

            if (typeof offset === 'string') {
                if (offset === 'first') {
                    defaultPostprocessors.unshift(name);

                    return this;
                }
                else if (offset === 'last') {
                    defaultPostprocessors.push(name);

                    return this;
                }

                offset = (offset === 'after') ? 1 : -1;
            }

            index = Ext.Array.indexOf(defaultPostprocessors, relativeName);

            if (index !== -1) {
                Ext.Array.splice(defaultPostprocessors, Math.max(0, index + offset), 0, name);
            }

            return this;
        },

        getNamesByExpression: function(expression) {
            var nameToAliasesMap = this.maps.nameToAliases,
                names = [],
                name, alias, aliases, possibleName, regex, i, ln;

            //<debug error>
            if (typeof expression !== 'string' || expression.length < 1) {
                NX.Error.raise({
                    sourceClass: "NX.ClassManager",
                    sourceMethod: "getNamesByExpression",
                    msg: "Expression " + expression + " is invalid, must be a non-empty string"
                });
            }
            //</debug>

            if (expression.indexOf('*') !== -1) {
            */
                // expression = expression.replace(/\*/g, '(.*?)');
    /*
                regex = new RegExp('^' + expression + '$');

                for (name in nameToAliasesMap) {
                    if (nameToAliasesMap.hasOwnProperty(name)) {
                        aliases = nameToAliasesMap[name];

                        if (name.search(regex) !== -1) {
                            names.push(name);
                        }
                        else {
                            for (i = 0, ln = aliases.length; i < ln; i++) {
                                alias = aliases[i];

                                if (alias.search(regex) !== -1) {
                                    names.push(name);
                                    break;
                                }
                            }
                        }
                    }
                }

            } else {
                possibleName = this.getNameByAlias(expression);

                if (possibleName) {
                    names.push(possibleName);
                } else {
                    possibleName = this.getNameByAlternate(expression);

                    if (possibleName) {
                        names.push(possibleName);
                    } else {
                        names.push(expression);
                    }
                }
            }

            return names;
        }
        */
    };

    /*
    Manager.registerPostprocessor('alias', function(name, cls, data) {
        var aliases = data.alias,
            i, ln, alias;

        if (!(aliases instanceof Array)) {
            aliases = [aliases];
        }

        for (i = 0, ln = aliases.length; i < ln; i++) {
            alias = aliases[i];

            if (typeof alias !== 'string') {
                NX.Error.raise({
                    sourceClass: "NX",
                    sourceMethod: "define",
                    msg: "Invalid alias of: '" + alias + "' for class: '" + name + "'; must be a valid string"
                });
            }

            this.setAlias(cls, alias);
        }

        for (i = 0, ln = aliases.length; i < ln; i++) {
            alias = aliases[i];
        }
    });

    Manager.registerPostprocessor('singleton', function(name, cls, data, fn) {
        fn.call(this, name, new cls(), data);
        return false;
    });

    Manager.registerPostprocessor('alternateClassName', function(name, cls, data) {

        var alternates = data.alternateClassName,
            i, ln, alternate;

        if (!(alternates instanceof Array)) {
            alternates = [alternates];
        }

        for (i = 0, ln = alternates.length; i < ln; i++) {
            alternate = alternates[i];

            if (typeof alternate !== 'string') {
                NX.Error.raise({
                    sourceClass: "NX",
                    sourceMethod: "define",
                    msg: "Invalid alternate of: '" + alternate + "' for class: '" + name + "'; must be a valid string"
                });
            }

            this.set(alternate, cls);
        }
    });

    Manager.setDefaultPostprocessors(['alias', 'singleton', 'alternateClassName']);

    */
    NX.apply(NX, {

        // {{{ create

        create: alias(Manager, 'instantiate'),

        // }}}
        // {{{ factory

        /*
        factory: function(item, namespace) {

            if (item instanceof Array) {
                var i, ln;

                for (i = 0, ln = item.length; i < ln; i++) {
                    item[i] = NX.factory(item[i], namespace);
                }

                return item;
            }

            var isString = (typeof item === 'string');

            if (isString || (item instanceof Object && item.constructor === Object)) {
                var name, config = {};

                if (isString) {
                    name = item;
                }
                else {
                    name = item.className;
                    config = item;
                    delete config.className;
                }

                if (namespace !== undefined && name.indexOf(namespace) === -1) {
                    name = namespace + '.' + NX.String.capitalize(name);
                }

                return NX.create(name, config);
            }

            if (typeof item === 'function') {
                return NX.create(item);
            }

            return item;
        },

        // }}}
        // {{{ createByAlias

        createByAlias: alias(Manager, 'instantiateByAlias'),

        // }}}
        // {{{ define

        define: alias(Manager, 'create'),

        // }}}
        // {{{ getClassName

        getClassName: alias(Manager, 'getName'),

        // }}}
        // {{{ getDisplayName

        getDisplayName: function(object) {

            if (object.displayName) {
                return object.displayName;
            }

            if (object.$name && object.$class) {
                return NX.getClassName(object.$class) + '#' + object.$name;
            }

            if (object.$className) {
                return object.$className;
            }

            return 'Anonymous';
        },

        // }}}
        // {{{ getClass

        getClass: alias(Manager, 'getClass'),

        // }}}
        // {{{ namespace

        */
        namespace: alias(Manager, 'createNamespaces')

        // }}}

    });

    // {{{ NX.ns

    NX.ns = NX.namespace;

    // }}}

    /*
    Class.registerPreprocessor('className', function(cls, data) {
        if (data.$className) {
            cls.$className = data.$className;
            cls.displayName = cls.$className;
        }
    }, true);

    Class.setDefaultPreprocessorPosition('className', 'first');

    */

})(NX.Class, NX.Function.alias);

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
