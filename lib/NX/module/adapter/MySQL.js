/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

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

        // スーパークラスメソッドコール
        NX.module.adapter.MySQL.superclass.constructor.apply(me, arguments);

        // クライアント生成

        var Client = require('mysql').Client;

        me.client = new Client();

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

    connect : function() {

        var me = this;

        me.client.connect();

        return me.client;

    },

    // }}}
    // {{{ disconnect

    disconnect : function() {

        var me = this;

        if(me.client) {
            me.client.disconnect();
        }

    },

    // }}}
    // {{{ query

    query : function(sql, callback) {

        var me = this;

        me.client.query(sql, callback);
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
