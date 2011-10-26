/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.smtp.Client

NX.define('NX.smtp.Client', {

    // {{{ requires

    requires: [
        'NX.smtp.Error',
        'NX.smtp.message.Message',
        'NX.smtp.Response'
    ],

    // }}}
    // {{{ statics

    statics: {

        // {{{ connect

        connect: require('./statics/connect');

        // }}}

    },

    // }}}
    // {{{ $poll

    $poll: require('./dollar_poll'),

    // }}}
    // {{{ $connect

    $connect: require('./dollar_connect'),

    // }}}
    // {{{ $sendsmtp

    $sendsmtp: require('./dollar_sendsmtp'),

    // }}}
    // {{{ $sendmail

    $sendmail: require('./dollar_sendmail'),

    // }}}
    // {{{ $sendrcpt

    $sendrcpt: require('./dollar_sendrcpt'),

    // }}}
    // {{{ $senddata

    $senddata: require('./dollar_senddata'),

    // }}}
    // {{{ $sendmessage

    $sendmessage: require('./dollar_sendmessage'),

    // }}}
    // {{{ $senddone

    $senddone: require('./dollar_senddone'),

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
