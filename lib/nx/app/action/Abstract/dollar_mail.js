/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.app.action.Abstract.$mail

module.exports = function(config, fn) {

    var client, co = {};

    config = config || {};
    fn = NX.isFunction(fn) ? fn : NX.emptyFn;

    NX.apply(co, {
        host: config.host,
        user: config.user,
        password: config.password,
        ssl: config.ssl
    });

    NX.applyIf(co, {
        host: '127.0.0.1'
    });

    delete config.host;
    delete config.user;
    delete config.password;
    delete config.ssl;

    // SMTPクライアント生成
    client = NX.create('NX.smtp.Client', co);

    // メール送信
    client.send(config, fn);

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
