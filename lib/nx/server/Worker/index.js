/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

var NX = require('../../index');

// {{{ NX.server.Worker

NX.define('NX.server.Worker', {

    // {{{ requires

    requires: [
        'NX.app.Dispatcher',
        'NX.server.Server',
        'NX.server.Http',
        'NX.server.Https',
        'NX.server.Cookie',
        'NX.server.Session',
        'NX.server.multipart.File',
        'NX.server.multipart.Form',
        'NX.server.multipart.Parser'
    ],

    // }}}
    // {{{ singleton

    singleton: require('./singleton'),

    // }}}
    // {{{ extend

    extend: require('./extend'),

    // }}}
    // {{{ config

    config: require('./config'),

    // }}}
    // {{{ init

    init: require('./init'),

    // }}}
    // {{{ startServer

    startServer: require('./startServer'),

    // }}}
    // {{{ start

    start: require('./start')

    // }}}

}, function() {

    NX.server.Worker.start();

});

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
