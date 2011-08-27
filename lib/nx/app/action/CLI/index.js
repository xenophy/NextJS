/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.app.action.CLI

NX.define('NX.app.action.CLI', {

    // {{{ extend

    extend: 'NX.app.action.Abstract',

    // }}}
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
