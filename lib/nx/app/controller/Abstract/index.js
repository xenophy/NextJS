/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.app.controller.Abstract

NX.define('NX.app.controller.Abstract', {

    // {{{ requires

    requires: [
        'NX.app.config.Config',
        'NX.app.action.Abstract',
        'NX.app.action.Web'
    ],

    // }}}
    // {{{ constructor

    constructor: require('./constructor'),

    // }}}
    // {{{ init

    init: require('./init'),

    // }}}
    // {{{ initAction

    initAction: require('./initAction'),

    // }}}
    // {{{ initDatabaseConfig

    initDatabaseConfig: require('./initDatabaseConfig'),

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
