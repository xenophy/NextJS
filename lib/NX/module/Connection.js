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
            me.adapterName = me.adapter;
            me.adapterName = adapters[me.adapterName.toLowerCase()];
            me.adapter = new NX.module.adapter[me.adapterName](config);

        }

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

        this.adapter.connect(cb);
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
