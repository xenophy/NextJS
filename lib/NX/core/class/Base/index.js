/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.Base

/**
 * @class NX.Base
 */
var T_Base = module.exports = function() {};

T_Base.prototype = {

    // {{{ $className

    /**
     * @prop $className
     * @private
     */
    $className: 'NX.Base',

    // }}}
    // {{{ $class

    /**
     * @prop $class
     * @private
     */
    $class: T_Base,

    // }}}
    // {{{ self

    /**
     * @prop self
     */
    self: T_Base,

    // }}}
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
    initConfig: require('./initConfig'),

    // }}}
    // {{{ setConfig

    /**
     * @method setConfig
     * @private
     */
    setConfig: require('./setConfig'),

    // }}}
    // {{{ applyConfig

    /**
     * @method applyConfig
     * @private
     */
    applyConfig: require('./applyConfig'),

    // }}}
    // {{{ callParent

    /**
     * @method callParent
     */
    callParent: require('./callParent'),

    // }}}
    // {{{ statics

    /**
     * @method statics
     */
    statics: require('./statics'),

    // }}}
    // {{{ callOverridden

    /**
     * @method callOverridden
     */
    callOverridden: require('./callOverridden')

    // }}}

};

// }}}
// {{{ Static Properies

T_NX.apply(T_Base, {

    // {{{ ownMethod

    /**
     * @method ownMethod
     */
    ownMethod: require('./statics/ownMethod'),

    // }}}
    // {{{ borrowMethod

    /**
     * @method borrowMethod
     */
    borrowMethod: require('./statics/borrowMethod'),

    // }}}
    // {{{ extend

    /**
     * @method extend
     */
    extend: require('./statics/extend'),

    // }}}
    // {{{ implement

    /**
     * @method implement
     */
    implement: require('./statics/implement'),

    // }}}
    // {{{ override

    /**
     * @method override
     */
    override: require('./statics/override'),

    // }}}
    // {{{ mixin

    /**
     * @method mixin
     */
    mixin: require('./statics/mixin'),

    // }}}
    // {{{ createAlias

    /**
     * @method createAlias
     */
    createAlias: require('./statics/createAlias')

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
