/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var mongo = require('mongodb');

// }}}
// {{{ namespace

NX.ns('NX.module', 'NX.module.adapter');

// }}}
// {{{ private

var MyName = 'MongoDB';

// }}}
// {{{ NX.module.adapter.MongoDB

/**
 * @class NX.module.adapter.MongoDB
 */
NX.module.adapter.MongoDB = NX.extend(NX.module.adapter.AbstractAdapter, {

    // {{{ constructor

    /**
     * @method AbstractAdapter
     */
    constructor : function(config) {

        var me = this;

        config = config || {};

        // コンフィグ設定
        me.setConfig(config);

        // スーパークラスメソッドコール
        NX.module.adapter.MongoDB.superclass.constructor.apply(me, arguments);

    },

    // }}}
    // {{{ setConfig

    /**
     * @method setConfig
     */
    setConfig : function(config) {
        this.config = config;
    },

    // }}}
    // {{{ connect

    connect : function(cb) {

        var me = this;
        var host = me.config.host || 'localhost';
        var port = me.config.port || 27017;
        var autoReconnect = me.config.autoReconnect || true;
        var database = me.config.database || null;
        var user = me.config.user || '';
        var password = me.config.password || '';

        // TODO:データベース名が指定されていない場合は、例外発生

        // サーバー生成
        me.server = new mongo.Server(host, port, {auto_reconnect: autoReconnect});
        me.db = new mongo.Db(database, me.server, {});

        me.db.open(function(err) {

            /*
            * TODO: 認証処理実装
            db.authenticate(username, password, function(err) {
            });
            **/

            cb();
        });

    },

    // }}}
    // {{{ disconnect

    disconnect : function(cb) {

        var me = this;

        me.db.close();

        // MongoDB ドライバのcloseは、コールバック関数を呼び出さない同期なので
        // 自身でコールバック関数をコールする
        cb();
    },

    // }}}
    // {{{ getName

    /**
     * @method getName
     */
    getName : function() {
        return MyName;
    },

    // }}}
    // {{{ save

    /**
     * @method save
     */
    save : function(use, data, cb) {

        var me = this;

        me.db.collection(use, function(err, coll) {

            coll.save(data, function() {
                cb();
            });

        });

    },

    // }}}
    // {{{ find

    /**
     * @method find
     */
    find : function(use, query, cols, cb) {

        var me = this;
        var findCb = function(err, cursor) {
            cursor.toArray(function(err, results) {
                cb(results);
            });
        };

        me.db.collection(use, function(err, coll) {

            if(NX.isObject(query) && NX.isObject(cols)) {
                coll.find(query, cols, findCb);
            } else if(NX.isObject(query)) {
                coll.find(query, findCb);
            } else {
                coll.find(findCb);
            }

        });

    }

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
