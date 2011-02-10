/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var path = require('path');
var fs = require('fs');
var getAdapterName = require('./abstract/getAdapterName');
var getDatabase = require('./abstract/getDatabase');
var schema = require('./abstract/schema');
var getTableInfo = require('./abstract/getTableInfo');
var execute = require('./abstract/execute');
var beginTrans = require('./abstract/beginTrans');
var rollback = require('./abstract/rollback');
var commit = require('./abstract/commit');
var insert = require('./abstract/insert');
var update = require('./abstract/update');
var _delete = require('./abstract/delete');

// }}}
// {{{ namespace

NX.ns('NX.module');

// }}}
// {{{ private

var lastInsertId;

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

    },

    // }}}
    // {{{ getAdapterName

    /**
     * @method getAdapterName
     */
    getAdapterName : function() {
        return getAdapterName(this);
    },

    // }}}
    // {{{ getDatabase

    /**
     * @method getDatabase
     */
    getDatabase : function() {
        return getDatabase(this);
    },

    // }}}
    // {{{ schema

    /**
     * @method schema
     */
    schema : function(callback) {
        schema(this, callback);
    },

    // }}}
    // {{{ getTableInfo

    /**
     * @method getTableInfo
     */
    getTableInfo : function(callback) {
        getTableInfo(this, callback);
    },

    // }}}
    // {{{ execute

    /**
     * @method execute
     */
    execute : function(query, callback) {
        execute(this, query, callback);
    },

    // }}}
    // {{{ beginTrans

    /**
     * @method beginTrans
     */
    beginTrans : function(callback) {
        beginTrans(this, callback);
    },

    // }}}
    // {{{ rollback

    /**
     * @method rollback
     */
    rollback : function(callback) {
        rollback(this, callback);
    },

    // }}}
    // {{{ commit

    /**
     * @method commit
     */
    commit : function(callback) {
        commit(this, callback);
    },

    // }}}
    // {{{ insert

    /**
     * @method insert
     */
    insert : function(v, callback) {

        insert(this, v, function(info) {

            lastInsertId = info.insertId;

            callback(info);
        });
    },

    // }}}
    // {{{ update

    /**
     * @method update
     */
    update : function(v, where, callback) {
        update(this, v, where, callback);
    },

    // }}}
    // {{{ delete

    /**
     * @method delete
     */
    delete : function(where, callback) {
        _delete(this, where, callback);
    },

    // }}}

    // トランケートメソッド

    // {{{ lastId

    /**
     * @method lastId
     */
    lastId : function() {
        return lastInsertId;
    }

    // }}}

    // rowメソッド

    // get/findメソッド

    // rowAllメソッド

    // getAll/findAllメソッド

    // countメソッド

    // テーブルロックメソッド

    // テーブルアンロックメソッド

    // setメソッド

    // removeメソッド

    // bindメソッド

    // unbindメソッド

});

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
