/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ require

var T_NX = require('./core');
var flexSetter = require('./Function').flexSetter;

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

    },

    // }}}
    // {{{ setConfig

    /**
     * @method setConfig
     * @private
     */
    setConfig: function(config) {

    },

    // }}}
    // {{{ applyConfig

    /**
     * @method applyConfig
     * @private
     */
    applyConfig: flexSetter(function(name, value) {

        var me = this;



        return me;
    }),

    // }}}
    // {{{ callParent

    /**
     * @method callParent
     */
    callParent: function(args) {

    },

    // }}}
    // {{{ statics

    /**
     * @method statics
     */
    statics: function() {

    },

    // }}}
    // {{{ callOverridden

    /**
     * @method callOverridden
     */
    callOverridden: function(args) {

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
