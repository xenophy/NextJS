/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ require

var T_NX = require('../core');
var T_Object = require('../Object');
var T_String = require('../String');
var flexSetter = require('../Function').flexSetter;

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
        console.log("NX.Base");
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
    ownMethod: function() {
    
    },

    // }}}
    // {{{ borrowMethod

    /**
     * @method borrowMethod
     */
    borrowMethod: function() {
    
    },

    // }}}
    // {{{ extend

    /**
     * @method extend
     */
    extend: function() {
    
    },

    // }}}
    // {{{ implement

    /**
     * @method implement
     */
    implement: function() {
    
    },

    // }}}
    // {{{ override

    /**
     * @method override
     */
    override: function() {
    
    },

    // }}}
    // {{{ mixin

    /**
     * @method mixin
     */
    mixin: function() {
    
    },

    // }}}
    // {{{ createAlias

    /**
     * @method createAlias
     */
    createAlias: function() {
    
    }

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
