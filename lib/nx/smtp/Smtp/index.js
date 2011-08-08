/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.smtp.Smtp

NX.define('NX.smtp.Smtp', {

    // {{{ requires

    requires: [
        'NX.smtp.Response'
    ],

    // }}}
    // {{{ statics

    statics: {

        // {{{ CONNECTING

        CONNECTING: 100,

        // }}}
        // {{{ CONNECTED

        CONNECTED: 101,

        // }}}
        // {{{ NOTCONNECTED

        NOTCONNECTED: 102

        // }}}

    },

    // }}}
    // {{{ constructor

    constructor: require('./constructor'),

    // }}}
    // {{{ connect

    connect: require('./connect'),

    // }}}
    // {{{ close

    close: require('./close'),

    // }}}
    // {{{ send

    send: require('./send')

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
