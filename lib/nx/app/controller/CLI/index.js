/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.app.controller.CLI

NX.define('NX.app.controller.CLI', {

    // {{{ requires

    requires: [
    ],

    // }}}
    // {{{ extend

    extend: 'NX.app.controller.Abstract',

    // }}}
    // {{{ alternateClassName

    alternateClassName: 'NX.CLIController',

    // }}}
    // {{{ constructor

    constructor: require('./constructor'),

    // }}}
    // {{{ init

    init: require('./init'),

    // }}}
    // {{{ execute

    execute: require('./execute'),

    // }}}
    // {{{ render

    render: require('./render')

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
