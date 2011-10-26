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
        'NX.smtp.Message',
        'NX.smtp.Response',
        'NX.smtp.Tls'
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

        NOTCONNECTED: 102,

        // }}}
        // {{{ CRLF

        CRLF: "\r\n",

        // }}}
        // {{{ SMTP_PORT

        SMTP_PORT: 25,

        // }}}
        // {{{ SMTP_SSL_PORT

        SMTP_SSL_PORT: 465,

        // }}}
        // {{{ SMTP_TLS_PORT

        SMTP_TLS_PORT: 587,

        // }}}
        // {{{ AUTH_METHODS

        AUTH_METHODS: {
            PLAIN:'PLAIN',
            CRAM_MD5:'CRAM-MD5',
            LOGIN:'LOGIN'
        },

        // }}}
        // {{{ TIMEOUT

        TIMEOUT: 5000,

        // }}}
        // {{{ ERROR

        ERROR: {
            COULDNOTCONNECT     : 1,
            BADRESPONSE         : 2,
            AUTHFAILED          : 3,
            TIMEDOUT            : 4,
            ERROR               : 5,
            NOCONNECTION        : 6,
            AUTHNOTSUPPORTED    : 7,
            CONNECTIONCLOSED    : 8,
            CONNECTIONENDED     : 9,
            CONNECTIONAUTH      : 10
        }

        // }}}

    },

    // }}}
    // {{{ SMTP_USER

    SMTP_USER: null,

    // }}}
    // {{{ SMTP_PASSWORD

    SMTP_PASSWORD: null,

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

    send: require('./send'),

    // }}}
    // {{{ command

    command: require('./command'),

    // }}}
    // {{{ helo

    helo: require('./helo'),

    // }}}
    // {{{ mail

    mail: require('./mail'),

    // }}}
    // {{{ rcpt

    rcpt: require('./rcpt'),

    // }}}
    // {{{ data

    data: require('./data'),

    // }}}
    // {{{ end

    end: require('./end'),

    // }}}
    // {{{ message

    message: require('./message'),

    // }}}
    // {{{ authorized

    authorized: require('./authorized'),

    // }}}
    // {{{ ehlo_or_helo_if_needed

    ehlo_or_helo_if_needed: require('./ehlo_or_helo_if_needed'),

    // }}}
    // {{{ ehlo

    ehlo: require('./ehlo'),

    // }}}
    // {{{ starttls

    starttls: require('./starttls'),

    // }}}
    // {{{ has_extn

    has_extn: require('./has_extn'),

    // }}}
    // {{{ help

    help: require('./help'),

    // }}}
    // {{{ rset

    rset: require('./rset'),

    // }}}
    // {{{ noop

    noop: require('./noop'),

    // }}}
    // {{{ verify

    verify: require('./verify'),

    // }}}
    // {{{ expn

    expn: require('./expn'),

    // }}}
    // {{{ login

    login: require('./login'),

    // }}}
    // {{{ close

    close: require('./close'),

    // }}}
    // {{{ quit

    quit: require('./quit')

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
