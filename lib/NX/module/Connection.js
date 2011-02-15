/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ namespace

NX.ns('NX.module');

// }}}
// {{{ private

var adapters = {
    'mongo' : 'MongoDB',
    'mysql' : 'MySQL'
};

// }}}
// {{{ NX.module.Connection

/**
 * @class NX.module.Connection
 */
NX.module.Connection = NX.extend(require('events').EventEmitter, {

    // {{{ connected

    connected : false,

    // }}}
    // {{{ constructor

    /**
     * @method Connection
     */
    constructor : function(config) {

        var me = this;

        // 設定適用
        NX.apply(me, config || {});

        // スーパークラスメソッドコール
        NX.module.Connection.superclass.constructor.apply(me, arguments);

        if(config) {
            // アダプター生成
            me.createAdapter(config);
        }
    },

    // }}}
    // {{{ createAdapter

    /**
     * @method createAdapter
     */
    createAdapter : function(config) {

        var me = this;

        me.adapterName = config.adapter;
        me.adapterName = adapters[me.adapterName.toLowerCase()];
        me.adapter = new NX.module.adapter[me.adapterName](config);

        // アダプター内部のエラーハンドラ
        me.adapter.on('error', function(err) {
            me.emit('error', err)
        });
    },

    // }}}
    // {{{ connect

    /**
     * @method connect
     */
    connect : function(cb) {

        var me = this;

        if(!me.adapter) {
            throw new Error("Cannot find Database Adapter.");
        }

        me.adapter.connect(function() {
            me.connected = true;
            cb();
        });
    },

    // }}}
    // {{{ disconnect

    /**
     * @method disconnect
     */
    disconnect : function(cb) {

        var me = this;

        me.adapter.disconnect(function() {
            cb();
        });
    },

    // }}}
    // {{{ createCollection

    /**
     * @method createCollection
     */
    createCollection : function(name, opt, cb) {
        this.adapter.createCollection(name, opt, cb);
    },

    // }}}
    // {{{ collectionNames

    /**
     * @method collectionNames
     */
    collectionNames : function(cb) {
        this.adapter.collectionNames(cb);
    },

    // }}}
    // {{{ dropCollection

    /**
     * @method dropCollection
     */
    dropCollection : function(name, cb) {
        this.adapter.dropCollection(name, cb);
    },

    // }}}
    // {{{ dropDatabase

    /**
     * @method dropDatabase
     */
    dropDatabase : function(cb) {
        this.adapter.dropDatabase(cb);
    },

    // }}}
    // {{{ listDatabases

    /**
     * @method listDatabases
     */
    listDatabases : function(cb) {
        this.adapter.listDatabases(cb);
    },

    // }}}
    // {{{ save

    save : function(use, data, cb) {
        this.adapter.save(use, data, cb);
    },

    // }}}
    // {{{ find

    find : function(use, query, cols, cb) {
        this.adapter.find(use, query, cols, cb);
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
