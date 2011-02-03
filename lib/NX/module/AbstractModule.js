/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var path = require('path');
var fs = require('fs');

// }}}
// {{{ namespace

NX.ns('NX.module');

// }}}
// {{{ NX.module.AbstractModule

/**
 * @class NX.module.AbstractModule
 */
NX.module.AbstractModule = NX.extend(require('events').EventEmitter, {

    // {{{ autoConnect

    autoConnect : true,

    // }}}
    // {{{ controller

    controller : null,

    // }}}
    // {{{ destructor

    destructor : function() {
        console.log("destructor called");
    },

    // }}}
    // {{{ constructor

    /**
     * @method AbstractModule
     */
    constructor : function(config) {

        var me = this;

        config  = config || {};

        // 設定適用
        NX.apply(me, config);

        // スーパークラスメソッドコール
        NX.module.AbstractModule.superclass.constructor.apply(me, arguments);

        // コネクションオブジェクト生成
        me.connection = new NX.module.Connection(me.controller.config.database.connections[me.connName]);

        // アダプターメソッドをモジュールに適用
        var adapter = me.connection.adapter;
        if(adapter) {

            NX.each(['connect', 'disconnect', 'query'], function(name) {
                me[name] = function() {
                    adapter[name].apply(adapter, arguments);
                }
            });

            if(me.autoConnect === true && me.useTable !== false) {
                me.connect(function() {
                    me.connected = true;
                    me.readyed = true;
                    me.emit('ready');
                });
            }

        } else {
            me.readyed = true;
            me.emit('ready');
        }

        if(me.useTable !== false) {
            me.useTable = me.name;
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
