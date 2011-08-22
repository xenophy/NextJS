/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.server.Worker.startServer

module.exports = function(fd) {

    var me = this;

    // ミドルウェア定義
    var middleware = [

        // 開始時間
        function(req, res, next) {
            res.accessStartTime = NX.microtime(true);
            res.accessStartDate = new Date();
            next();
        },

        NX.server.Server.bodyParser(),
        NX.server.Server.cookieParser(),
        NX.server.Server.sessionProvider(me.config.session),
        NX.server.Server.requestParser(me.config),
        NX.server.Server.multipartParser(),
        NX.Dispatcher.dispatch(),

        // 終了時間
        function(req, res, next) {
            res.accessEndTime = NX.microtime(true);
            next();
        },

        // アクセスログ出力
        NX.server.log.Access.output(me, me.config)
    ];

    if(this.config.serverType === 'https') {

        key = me.config.key;
        cert = me.config.cert;

        var o = {
            key: key,
            cert: cert
        };

        if(me.config.ca) {
            o.ca = me.config.ca;
        }

        // HTTPSサーバー生成
        (new NX.server.Https(middleware, o)).listenFD(fd);

    } else {

        // HTTPサーバー生成
        (new NX.server.Http(middleware)).listenFD(fd);

    }

    // uncaughtException
    process.on('uncaughtException', NX.server.Server.onUncaughtException);

    console.log('Worker Ready: ' + process.pid);

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
