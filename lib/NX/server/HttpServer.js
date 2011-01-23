/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var http = require('http');

// }}}
// {{{ namespace

NX.ns('NX.server');

// }}}
// {{{ NX.server.HttpServer

/**
 * @class NX.server.HttpServer
 */
Server = NX.server.HttpServer = NX.extend(require('events').EventEmitter, {

    // {{{ constructor

    /**
     * @method constructor
     */
    constructor : function(cfg) {

        cfg = cfg || {};

        var me = this;

        // 設定適用
        NX.apply(me, cfg);
        NX.applyIf(me, {
            servers: [],
            errorDocument : {},
            mimetype : {}
        });

        // エラードキュメント設定
        NX.applyIf(me.errorDocument, require('../config/http/error'));

        // mimetype設定
        NX.applyIf(me.mimetype, require('../config/http/mimetype'));

        // ルート設定
        if(!NX.isArray(me.servers)) {
            throw new Error('specify an array of listeners.');
        }

        // スーパークラスメソッドコール
        Server.superclass.constructor.apply(me, arguments);

        // サーバーオブジェクト生成
        var srv = [];
        me.servers.forEach(function(item) {

            if(!NX.isNumber(item.port)) {
                throw new Error('specify an number of port.');
            }

            NX.apply(item, {
                errorDocument: me.errorDocument,
                mimetype: me.mimetype,
            });

            var o = {
                port: item.port,
                host: item.host,
                listener: function(req, res) {

                    // ディスパッチ
                    o.dispatcher.dispatch(req, res);

                }
            };
            o.server = http.createServer(o.listener);

            // ディスパッチャー生成
            o.dispatcher = new NX.server.Dispatcher(item);

            srv.push(o);
        });
        me.servers = srv;

    },

    // }}}
    // {{{ listen

    listen: function() {
        this.servers.forEach(function(o) {
            o.server.listen(o.port, o.host);
        });
    }

    // }}}

});

// }}}
// {{{ createServer

/**
 * @method HttpServer.createServer
 */
Server.createServer = function(cfg) {
    return new NX.server.HttpServer(cfg);
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
