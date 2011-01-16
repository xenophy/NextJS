/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var connect = require('connect');

// }}}
// {{{ NX.server.HttpServer

/**
 * @class NX.server.HttpServer
 */
NX.server.HttpServer = NX.extend(NX.util.Observable, {

    // {{{ constructor

    /**
     * @method HttpServer
     */
    constructor : function() {

        var me = this;

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
    // {{{ initEvents

    initEvents : function() {

        var me = this;

         // イベント定義
        me.addEvents(

            /**
             * @event beforeListen
             */
            'beforeListen',

            /**
             * @event afterListen
             */
            'afterListen'

        );

        // リレーイベント設定
        me.relayEvents(me.dispatcher, [


        ]);

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

            me.dispatcher.dispatch.apply(me.dispatcher, arguments);

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
NX.server.HttpServer.create = function(config) {
    return new NX.server.HttpServer(config || {}).createServer();
};

// }}}
// {{{ NX class shorthand

/**
 * @class NX
 */

// }}}
// {{{ NX.createServer

/**
 * @method createServer
 */
NX.createServer = NX.server.HttpServer.create;

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
