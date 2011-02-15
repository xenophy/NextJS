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
    // {{{ connName

    connName : null,

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

        // コントローラー設定
        me.controller = config.controller;

        // コネクション名設定
        me.connName = config.connName;

        // ファイルパス設定
        me.__file = config.__file;

        // クラス定義設定
        me.__cls = config.__cls;

        // スーパークラスメソッドコール
        NX.Module.superclass.constructor.apply(me, arguments);

        // コネクションオブジェクト生成
        me.connection = new NX.module.Connection();

        // コネクション内部のエラーハンドラ
        me.connection.once('error', function(err) {
            me.controller.emit('error', err);
        });

        // NX.Moduleメンバキー取得
        NX.iterate(me, function(key) {
            me.members.push(key);
        });
    },

    // }}}
    // {{{ __setup

    __setup : function() {

        var me = this;

        if(me.autoConnect === true && me.use !== false) {

            // アダプター生成
            me.createAdapter(me.controller.config.database.connections[me.connName]);

            // モジュール接続処理
            me.connect(function() {
                me.emit('ready');
            });

        } else {
            me.emit('ready');
        }
    },

    // }}}
    // {{{ createAdapter

    /**
     * @method createAdapter
     */
    createAdapter : function(config) {
        this.connection.createAdapter(config);
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
    // {{{ disconnect

    /**
     * @method disconnect
     */
    disconnect : function(cb) {
        this.connection.disconnect(cb);
    },

    // }}}
    // {{{ createCollection

    /**
     * @method createCollection
     */
    createCollection : function(name, opt, cb) {

        var name, opt, cb;

        // パラメータを解析
        if(arguments.length === 2) {
            name = arguments[0];
            cb = arguments[1];
            opt = {};
        } else if(arguments.length === 3) {
            name = arguments[0];
            opt = arguments[1];
            cb = arguments[2];
        }

        this.connection.createCollection(name, opt, cb);
    },

    // }}}
    // {{{ collectionNames

    /**
     * @method collectionNames
     */
    collectionNames : function(cb) {
        this.connection.collectionNames(cb);
    },

    // }}}
    // {{{ dropCollection

    /**
     * @method dropCollection
     */
    dropCollection : function(name, cb) {
        this.connection.dropCollection(name, cb);
    },

    // }}}
    // {{{ dropDatabase

    /**
     * @method dropDatabase
     */
    dropDatabase : function(cb) {
        this.connection.dropDatabase(cb);
    },

    // }}}
    // {{{ listDatabases

    /**
     * @method listDatabases
     */
    listDatabases : function(cb) {
        this.connection.listDatabases(cb);
    },

    // }}}
    // {{{ renameCollection

    /**
     * @method renameCollection
     */
    renameCollection : function(src, dest, cb) {
        this.connection.renameCollection(src, dest, cb);
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
            throw new Errot('invalid arguments for find method.');
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
