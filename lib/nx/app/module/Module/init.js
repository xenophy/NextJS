/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ Database Class Name Table

DBCls = {
    'mysql': 'NX.database.MySQL',
    'mongo': 'NX.database.MongoDB',
    'mongodb': 'NX.database.MongoDB'
};

// }}}
// {{{ NX.app.moduke.Module.init

module.exports = function(req, fn) {

    var me = this;

    if(me.useTable !== false) {

        var connName = me.getConnName();
        var conf = req.dbconf;

        if(!conf[connName]) {

            // 存在しないコネクション名でエラー
            fn();

        }

        conf = conf[connName];

        // データベースクラス生成
        var cls = DBCls[conf.adapter.toLowerCase()];
        me.conn = NX.create(cls, conf);

        // 自動接続
        if(conf.autoConnect === true) {

            me.conn.connect(fn);

        } else {

            fn();

        }

    } else {

        fn();

    }

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
