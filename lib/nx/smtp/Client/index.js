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
        'NX.smtp.Address',
        'NX.smtp.Smtp'
    ],

    // }}}
    // {{{ constructor

    constructor: require('./constructor'),

    // }}}
    // {{{ send

    send: require('./send'),

    // }}}
    // {{{ poll

    poll: require('./poll'),

    // }}}
    // {{{ connect

    connect: require('./connect'),

    // }}}
    // {{{ sendMail

    sendMail: require('./sendMail'),

    // }}}
    // {{{ sendDone

    sendDone: require('./sendDone'),

    // }}}
    // {{{ sendSmtp

    sendSmtp: require('./sendSmtp'),

    // }}}
    // {{{ sendRcpt

    sendRcpt: require('./sendRcpt'),

    // }}}
    // {{{ sendData

    sendData: require('./sendData'),

    // }}}
    // {{{ sendMessage

    sendMessage: require('./sendMessage')

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
