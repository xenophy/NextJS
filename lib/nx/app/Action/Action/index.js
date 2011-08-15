/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.app.action.Action

NX.define('NX.app.action.Action', {

    // {{{ constructor

    constructor: require('./constructor'),

    // }}}
    // {{{ mixins

    mixins: [
        require('events').EventEmitter
    ],

    // }}}
    // {{{ set

    set: require('./set'),

    // }}}
    // {{{ init

    init: require('./init'),

    // }}}
    // {{{ setCookie

    setCookie: require('./setCookie'),

    // }}}
    // {{{ $execute

    $execute: require('./dollar_execute')

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
