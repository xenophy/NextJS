/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.server.Server

NX.define('NX.server.Server', {

    // {{{ requires

    requires: [
        'NX.server.Http',
        'NX.server.Https',
        'NX.server.Cookie',
        'NX.server.Session',
        'NX.server.multipart.File',
        'NX.server.multipart.Form',
        'NX.server.multipart.Parser'
    ],

    // }}}
    // {{{ extend

    extend: require('./extend'),

    // }}}
    // {{{ singleton

    singleton: require('./singleton'),

    // }}}
    // {{{ lockFile

    lockFile: require('./lockFile'),

    // }}}
    // {{{ logFile

    logFile: require('./logFile'),

    // }}}
    // {{{ boot

    boot: require('./boot'),

    // }}}
    // {{{ start

    start: require('./start'),

    // }}}
    // {{{ stop

    stop: require('./stop'),

    // }}}
    // {{{ bodyParser

    bodyParser: require('./bodyParser'),

    // }}}
    // {{{ cookieParser

    cookieParser: require('./cookieParser'),

    // }}}
    // {{{ sessionProvider

    sessionProvider: require('./sessionProvider'),

    // }}}
    // {{{ requestParser

    requestParser: require('./requestParser'),

    // }}}
    // {{{ multipartParser

    multipartParser: require('./multipartParser')

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
