/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ namespace

NX.ns('NX.module', 'NX.module.adapter');

// }}}
// {{{ requires

var getSchema = require('./MySQL/getSchema');
var getQueryTableInfo = require('./MySQL/getQueryTableInfo');
var query = require('./MySQL/query');

// }}}
// {{{ private

var MyName = 'MySQL';

// }}}
// {{{ NX.module.adapter.MySQL

/**
 * @class NX.module.adapter.MySQL
 */
NX.module.adapter.MySQL = NX.extend(NX.module.adapter.AbstractAdapter, {

    // {{{ constructor

    /**
     * @method AbstractAdapter
     */
    constructor : function(config) {

        var me = this;

        me.config = config = config || {};

        // スーパークラスメソッドコール
        NX.module.adapter.MySQL.superclass.constructor.apply(me, arguments);

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

    },

    // }}}
    // {{{ connect

    connect : function(callback) {

        var me = this;

        me.client.connect(function(err) {
            if(err) {
                throw err;
            }

            me.client.useDatabase(me.config.database,function(err) {
                callback();
            });
        });
    },

    // }}}
    // {{{ disconnect

    disconnect : function() {

        var me = this;

        if(me.client) {
            me.client.end();
        }

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
    // {{{ getSchema

    /**
     * @method getSchema
     */
    getSchema : function(table, callback) {
        getSchema(this, table, callback);
    },

    // }}}
    // {{{ getQueryTableInfo

    /**
     * @method getQueryTableInfo
     */
    getQueryTableInfo : function(table) {
        return getQueryTableInfo(this, table);
    },

    // }}}
    // {{{ query

    /**
     * @method query
     */
    query : function(sql, callback) {
        sql = sql || '';
        query(this, sql, callback);
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
