/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.app.module.Module

NX.define('NX.app.module.Module', {

    // {{{ requires

    requires: [
        'NX.database.Database',
        'NX.database.MySQL'
    ],

    // }}}
    // {{{ config

    config: {
        connName: 'default'
    },

    // }}}
    // {{{ alternateClassName

    alternateClassName: 'NX.Module',

    // }}}
    // {{{ constructor

    constructor: require('./constructor'),

    // }}}
    // {{{ init

    init: require('./init'),

    // }}}

    query: require('./query')

});

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */