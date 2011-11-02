/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.app.action.Abstract.$mail

module.exports = function(config, fn) {

    var me = this,
        email = require('emailjs'),
        Iconv = require('iconv-jp').Iconv,
        req = me.req;
        conf = req.smtpconf || { default: {} },
        server_conf = {},
        fn = NX.isFunction(fn) ? fn : NX.emptyFn;

    NX.applyIf(conf.default, {
        host: "127.0.0.1"
    });

    if(NX.isString(config.server)) {
        server_conf = conf[config.server] || conf['default'];
    } else if(NX.isObject(config.server)) {
        server_conf = config.server;
    } else {
        server_conf = conf['default'];
    }

    var server  = email.server.connect(server_conf);

    NX.applyIf(config, {
        charset: 'iso-2022-jp',
        header: {
            'message-id': '<' + (new Date()).getTime() + '.' + process.pid + '@' + NX.Os.hostname() + '>'
        }
    });

    NX.applyIf(config, {
        content: 'text/plain; charset=' + config.charset.toLowerCase()
    });

    var iconv = new Iconv('UTF-8', config.charset);

    var buffer = iconv.convert(config.subject || '');
    config.subject = buffer.toString();

    var message = email.message.create(config);

    // 添付ファイル処理
    if(config.files) {

        if(NX.isObject(config.files)) {
            config.files = [config.files];
        }

        if(NX.isArray(config.files)) {

            config.files.forEach(function(item) {

                var name = item.name;
                var ext = name.substr(name.indexOf('.') + 1);

                if(!item.type) {
                    if(NX.Mime.types[ext]) {
                        item.type = NX.Mime.types[ext];
                    } else {
                        NX.log("file ext error");
                    }
                }

                message.attach(item.path, item.type, item.name);

            });

        }

    }

    // 送信
    server.send(message, fn);
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
