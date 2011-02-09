/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ namespace

NX.ns('NX.module', 'NX.module.adapter');

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

        var me = this;
        var sql = NX.sprintf('SHOW FULL COLUMNS FROM %s;', table);

        me.query(sql, function(err, rs) {

            if(err) {
                throw err;
            }

            var ret = [];
            rs.forEach(function(r) {
                ret.push({
                    'field'     : r.Field,
                    'type'      : r.Type,
                    'key'       : r.Key,
                    'default'   : r.Default,
                    'extra'     : r.Extra,
                    'comment'   : r.Comment
                });
            });

            callback({
                query: sql,
                result: ret
            });
        });

    },

    // }}}
    // {{{ getQueryTableInfo

    /**
     * @method getQueryTableInfo
     */
    getQueryTableInfo : function(table) {

        return NX.sprintf(
            "SHOW TABLE STATUS FROM `%s` LIKE '%s'",
            this.config.database,
            table
        );

    },

    // }}}
    // {{{ query

    query : function(sql, callback) {

        var me = this;

        me.client.query(sql, function(err, info) {
            if(err) {
                throw err;
            } else {
                callback(err, info);
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
