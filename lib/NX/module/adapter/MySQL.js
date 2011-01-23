/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ namespace

NX.ns('NX.module', 'NX.module.adapter');

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
    // {{{ destructor

    destructor : function() {

        this.disconnect();

    },

    // }}}
    // {{{ connect

    connect : function() {

        var me = this;

        me.client.connect(function(err) {

            if(err) {
                throw err;
            }

            me.emit('connect');
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
    // {{{ query

    query : function(sql, callback) {

        var me = this;

        var exec = function() {
            me.client.query(sql, function(err, info) {
                if(err) {
                    if(err.sqlState === '3D000') {
                        me.client.useDatabase(me.config.database, function(err) {
                            if(err) {
                                throw err;
                            }
                            exec();
                        });
                    } else {
                        throw err;
                    }
                } else {
                    callback(err, info);
                }
            });
        };

        if(me.client.connected !== true) {
            var timer = setInterval(function() {
                if(me.client.connected === true) {
                    clearInterval(timer);
                    exec();
                }
            }, 50);
        } else {
            exec();
        }

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
