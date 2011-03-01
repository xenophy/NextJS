/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ require

var T_NX = require('../../../core');
var T_Object = require('../../lang/Object');
var T_String = require('../../lang/String');
var flexSetter = require('../../lang/Function').flexSetter;

// }}}
// {{{ NX.Base

/**
 * @class NX.Base
 */
var T_Base = module.exports = function() {};

T_Base.prototype = {

    $className: 'NX.Base',

    $class: T_Base,

    self: T_Base,

    // {{{ constructor

    /**
     * @method constructor
     */
    constructor: function() {
        return this;
    },

    // }}}
    // {{{ initConfig

    /**
     * @method initConfig
     */
    initConfig: function(config) {

        var me = this;

        if (!me.$configInited) {
            me.config = T_Object.merge({}, me.config || {}, config || {});
            me.applyConfig(me.config);
            me.$configInited = true;
        }

        return this;
    },

    // }}}
    // {{{ setConfig

    /**
     * @method setConfig
     * @private
     */
    setConfig: function(config) {
        this.applyConfig(config || {});
        return this;
    },

    // }}}
    // {{{ applyConfig

    /**
     * @method applyConfig
     * @private
     */
    applyConfig: flexSetter(function(name, value) {

        var me = this;

        var setter = 'set' + T_String.capitalize(name);
        if(typeof me[setter] === 'function') {
            me[setter].call(me, value);
        }

        return me;
    }),

    // }}}
    // {{{ callParent

    /**
     * @method callParent
     */
    callParent: function(args) {

        var method = this.callParent.caller,
            superCls, methodName;

        if(!method.$owner) {

            if(!method.caller) {
                throw new Error("[" + T_NX.getClassName(this) + "#callParent] Calling a protected method from the " +
                                "public scope");
            }

            method = method.caller;
        }

        superCls = method.$owner.superclass;
        methodName = method.$name;

        if(!(methodName in superCls)) {
            throw new Error("[" + T_NX.getClassName(this) + "#" + methodName + "] this.parent was called but there's no " +
                            "such method (" + methodName + ") found in the parent class (" +
                            (T_NX.getClassName(superCls) || 'Object') + ")");
        }

        return superCls[methodName].apply(this, args || []);
    },

    // }}}
    // {{{ statics

    /**
     * @method statics
     */
    statics: function() {

        var method = this.statics.caller,
        self = this.self;

        if (!method) {
            return self;
        }

        return method.$owner;
    },

    // }}}
    // {{{ callOverridden

    /**
     * @method callOverridden
     */
    callOverridden: function(args) {

        var method = this.callOverridden.caller,
            methodName = method.$name;

        if(!method.$owner) {
            throw new Error("[" + T_NX.getClassName(this) + "#callOverridden] Calling a protected method from the " +
                            "public scope");
        }

        if(!method.$previous) {
            throw new Error("[" + T_NX.getClassName(this) + "] this.callOverridden was called in '" + methodName +
                            "' but this method has never been overridden");
        }

        return method.$previous.apply(this, args || []);
    }

    // }}}

};

// }}}
// {{{ Static Properies

T_NX.apply(T_Base, {

    // {{{ ownMethod

    /**
     * @method ownMethod
     */
    ownMethod: flexSetter(function(name, fn) {

        var originalFn, className;

        if(fn === T_NX.emptyFn) {
            this.prototype[name] = fn;
            return;
        }

        if(fn.$isOwned) {
            originalFn = fn;

            fn = function() {
                return originalFn.apply(this, arguments);
            };
        }

        className = T_NX.getClassName(this);

        if(className) {
            fn.displayName = className + '#' + name;
        }

        fn.$owner = this;
        fn.$name = name;
        fn.$isOwned = true;

        this.prototype[name] = fn;
    }),

    // }}}
    // {{{ borrowMethod

    /**
     * @method borrowMethod
     */
    borrowMethod: flexSetter(function(name, fn) {

        if(!fn.$isOwned) {
            this.ownMethod(name, fn);
        } else {
            this.prototype[name] = fn;
        }
    }),

    // }}}
    // {{{ extend

    /**
     * @method extend
     */
    extend: flexSetter(function(name, value) {
        this[name] = value;
    }),

    // }}}
    // {{{ implement

    /**
     * @method implement
     */
    implement: flexSetter(function(name, value) {

        if(T_NX.isObject(this.prototype[name]) && T_NX.isObject(value)) {
            T_Object.merge(this.prototype[name], value);
        } else if (T_NX.isFunction(value)) {
            this.ownMethod(name, value);
        } else {
            this.prototype[name] = value;
        }

    }),

    // }}}
    // {{{ override

    /**
     * @method override
     */
    override: flexSetter(function(name, value) {
        if (T_NX.isObject(this.prototype[name]) && T_NX.isObject(value)) {
            T_NX.Object.merge(this.prototype[name], value);
        } else if (T_NX.isFunction(this.prototype[name]) && T_NX.isFunction(value)) {
            var previous = this.prototype[name];

            this.ownMethod(name, value);
            this.prototype[name].$previous = previous;
        } else {
            this.prototype[name] = value;
        }
    }),

    // }}}
    // {{{ mixin

    /**
     * @method mixin
     */
    mixin: flexSetter(function(name, cls) {
        var mixinPrototype = cls.prototype,
        myPrototype = this.prototype,
        i;

        for (i in mixinPrototype) {
            if (mixinPrototype.hasOwnProperty(i)) {
                if (myPrototype[i] === undefined) {
                    if (T_NX.isFunction(mixinPrototype[i])) {
                        this.borrowMethod(i, mixinPrototype[i]);
                    }
                    else {
                        myPrototype[i] = mixinPrototype[i];
                    }
                } else if (i === 'config' && T_NX.isObject(myPrototype[i]) && T_NX.isObject(mixinPrototype[i])) {
                    T_NX.Object.merge(myPrototype[i], mixinPrototype[i]);
                }
            }
        }

        if (!myPrototype.mixins) {
            myPrototype.mixins = {};
        }

        myPrototype.mixins[name] = mixinPrototype;
    }),

    // }}}
    // {{{ createAlias

    /**
     * @method createAlias
     */
    createAlias: flexSetter(function(alias, origin) {
        this.prototype[alias] = this.prototype[origin];
    })

    // }}}

});

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
