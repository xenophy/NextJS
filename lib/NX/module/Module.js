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
// {{{ NX.Module

/**
 * @class NX.Module
 */
NX.Module = NX.extend(require('events').EventEmitter, {

    // {{{ autoConnect

    autoConnect : true,

    // }}}
    // {{{ controller

    controller : null,

    // }}}
    // {{{ members

    members: [],

    // }}}
    // {{{ connection

    connection: null,

    // }}}
    // {{{ _events

    _events: {},

    // }}}
    // {{{ constructor

    /**
     * @method Module
     */
    constructor : function(config) {

        var me = this;

        config = config || {};

        me.controller = config.controller;

        // スーパークラスメソッドコール
        NX.Module.superclass.constructor.apply(me, arguments);

        // コネクションオブジェクト生成
        me.connection = new NX.module.Connection(me.controller.config.database.connections[config.connName]);

        NX.iterate(me, function(key) {
            me.members.push(key);
        });
    },

    // }}}
    // {{{ connect

    /**
     * @method connect
     */
    connect : function(cb) {
        this.connection.connect(cb);
    },

    // }}}
    // {{{ save

    /**
     * @method save
     */
    save : function(cb) {

        var me = this;
        var data = {};

        NX.iterate(me, function(key, v) {
            if(!NX.isFunction(v) && !NX.inArray(key, me.members)) {
                data[key] = v;
            }
        });

        // TODO:テーブル名/コレクション名が文字列でない場合は例外発生

        me.connection.save(me.use, data, cb);
    },

    // }}}
    // {{{ find

    /**
     * @method find
     */
    find : function() {

        var me = this;
        var query;
        var cols;
        var cb;

        // パラメータを解析
        if(arguments.length === 1) {
            cb = arguments[0];
        } else if(arguments.length === 2) {
            query = arguments[0];
            cb = arguments[1];
        } else if(arguments.length === 3) {
            query = arguments[0];
            cols = arguments[1];
            cb = arguments[2];
        } else {
            // TOOD: 例外
        }

        me.connection.find(me.use, query, cols, cb);
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
