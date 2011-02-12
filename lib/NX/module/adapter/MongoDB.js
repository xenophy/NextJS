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

        me.config = config = config || {};

        // スーパークラスメソッドコール
        NX.module.adapter.MongoDB.superclass.constructor.apply(me, arguments);


        /*
        // クライアント生成
        var Client = require('mysql').Client;

        me.client = new Client();

        // 設定適用
        if(config.host) {
            me.client.host = config.host;
        }

        if(config.port) {
            me.client.port = config.port;
        }

        if(config.user) {
            me.client.user = config.user;
        }

        if(config.password) {
            me.client.password = config.password;
        }
        */

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

    disconnect : function() {

        /*
        var me = this;

        if(me.client) {
            me.client.end();
        }

        */
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
