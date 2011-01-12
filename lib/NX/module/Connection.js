/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.module.Connection

/**
 * @class NX.module.Connection
 */
NX.module.Connection = NX.extend(NX.util.Observable, {

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

        config  = config || {};

        // 設定適用
        NX.apply(me, config);

        // スーパークラスメソッドコール
        NX.module.Connection.superclass.constructor.apply(me, arguments);

        // アダプター生成
        me.adapterName = me.adapter;
        me.adapterName = me.adapters[me.adapterName.toLowerCase()];
        eval('me.adapter = new NX.module.adapter.' + me.adapterName + '(me);');

    },

    // }}}
    // {{{ connect

    connect : function() {

        var me = this;

        // コネクションオブジェクト取得
        me.adapter.connect();

        // データベース選択
        if(NX.isString(me.database)) {
            me.adapter.query('USE ' + me.database);
        }

        /*

me.conn.query(
  'SELECT * FROM tbl_users',
  function selectCb(err, results, fields) {
    if (err) {
      throw err;
    }

//    console.log(results);
//    console.log(fields);
  }
);

*/

    },

    // }}}
    // {{{ disconnect

    /**
     * @method disconnect
     */
    disconnect : function() {

        // コネクションクローズ
        me.adapter.disconnect();

    },

    // }}}
    // {{{ query

    /**
     * @method query
     */
    query : function(sql, callback) {



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
