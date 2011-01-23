/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var NX = require('../NX.js'),
    connect = require('connect');

// }}}
// {{{ namespace

NX.ns('NX.server', 'NX.util');

// }}}
// {{{ NX.util.Observable

NX.util.Observable = require('../util/Observable.js');

// }}}
// {{{ NX.server.HttpServer

/**
 * @class NX.server.HttpServer
 */
exports = module.exports = NX.extend(NX.util.Observable, {

    // {{{ constructor

    /**
     * @method HttpServer
     */
    constructor : function() {

        var me = this;

        /**
         * @event beforeListen
         */

        /**
         * @event afterListen
         */

        // スーパークラスメソッドコール
        NX.server.HttpServer.superclass.constructor.apply(me, arguments);

        // 設定初期化
        me.initConfig();

        // ディスパッチャー生成
        me.dispatcher = new NX.server.Dispatcher({
            controllers : me.controllers
        });
    },

    // }}}
    // {{{ initConfig

    initConfig : function() {

        // View設定
        NX.applyIf(NX.config.view, {
            type: 'Web'
        });

        // Controller設定
        NX.applyIf(NX.config.controller, {
            type: 'Web'
        });

        // Session設定
        NX.applyIf(NX.config.session, {

        });

    },

    // }}}
    // {{{ createServer

    /**
     * @method createServer
     */
    createServer : function() {

        var me = this;

        // サーバーオブジェクト生成
        var srv = connect.createServer();

        // listenメソッドオーバーライド
        srv._listen = srv.listen;
        srv.listen = function() {

            // beforeListen : イベント発火
            if(me.fireEvent('beforeListen') !== false) {

                // オリジナル関数コール
                srv._listen.apply(this, arguments);

                // Socket.io設定
                if(me.websocket) {

                    me.dispatcher.WebSocketController = me.websocket;

                    require('socket.io').listen(srv).on('connection', function(client) {
                        me.dispatcher.websocket.call(me.dispatcher, client, this);
                    });

                }

                // afterListen : イベント発火
                if(me.fireEvent('afterListen') !== false) {
                }
            }
        };

        // useメソッドオーバーライド
        srv._use = srv.use;
        srv.use = function() {

            // beforeUse : イベント発火
            if(me.fireEvent('beforeUse') !== false) {

                // オリジナル関数コール
                srv._use.apply(this, arguments);

                // afterUse : イベント発火
                if(me.fireEvent('afterUse') !== false) {

                }
            }
        };

        // ボディデコーダー設定
        srv.use(connect.bodyDecoder());

        // クッキーデコーダー設定
        srv.use(connect.cookieDecoder());

        // セッション設定
        srv.use(connect.session({
            key: NX.config.session.key,
            secret: NX.config.session.secret,
            store: new connect.session.MemoryStore(NX.config.session.memory)
        }));

        // ディスパッチャー設定
        srv.use('/', function(req, res) {
            me.dispatcher.dispatch(req, res);
        });

        // サーバーオブジェクト格納
        me.server = srv;

        return srv;
    }

    // }}}

});

// }}}
// {{{ HttpServer.create

/**
 * @method HttpServer.create
 */
module.exports.create = function(config) {
    return new exports(config || {}).createServer();
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
