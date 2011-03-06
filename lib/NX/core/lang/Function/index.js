/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var T_NX = require('../../../core');

// }}}
// {{{ NX.Function

/**
 * @class NX.Function
 */
var T_Function = module.exports = {

    // {{{ flexSetter

    /**
     * @method flexSetter
     */
    flexSetter: require('./flexSetter'),

    // }}}
    // {{{ bind

    /**
     * @method bind
     */
    bind: require('./bind'),

    // }}}
    // {{{ pass

    /**
     * @method pass
     */
    pass: require('./pass'),

    // }}}
    // {{{ alias

    /**
     * @method alias
     */
    alias: require('./alias'),

    // }}}
    // {{{ createInterceptor

    /**
     * @method createInterceptor
     */
    createInterceptor: require('./createInterceptor'),

    // }}}
    // {{{ defer

    /**
     * @method defer
     */
    defer: require('./defer'),

    // }}}
    // {{{ createSequence

    /**
     * @method createSequence
     */
    createSequence: require('./createSequence'),

    // }}}
    // {{{ createBuffered

    /**
     * @method createBuffered
     */
    createBuffered: require('./createBuffered'),

    // }}}
    // {{{ createThrottled

    /**
     * @method createThrottled
     */
    createThrottled: require('./createThrottled'),

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
