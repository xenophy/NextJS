/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.server.Server.$initSession

module.exports = function(config) {

    var me = this;

    // セッション設定初期化
    if(!NX.isObject(config.session)) {
        config.session = {};
    }

    NX.applyIf(config.session, {
        key: 'nextjs.sid',
        serverPort: config.port,
        secret: process.NXEnv.sessionSecret,
    });

    if(!NX.isObject(config.session.cookie)) {
        config.session.cookie = {};
    }

    NX.applyIf(config.session.cookie, {
        path: '/',
        httpOnly: true,
        maxAge: 14400000
    });

    if(!NX.isObject(config.session.gc)) {
        config.session.gc = {};
    }

    NX.applyIf(config.session.gc, {
        probability: 1,
        divisor: 1000,
        maxAge: 14400000
    });

    return config;

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
