/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ namespace

NX.ns('NX.module');

// }}}
// {{{ NX.module.Connection

/**
 * @class NX.module.Connection
 */
NX.module.Connection = NX.extend(require('events').EventEmitter, {

    // {{{ adapterNameTable

    adapters : {
        'mysql' : 'MySQL'
    },

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
            me.adapterName = me.adapter;
            me.adapterName = me.adapters[me.adapterName.toLowerCase()];
            me.adapter = new NX.module.adapter[me.adapterName](config);

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
