/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ users

module.exports = NX.extend(NX.Module, {

    // {{{ getSpec

    getSpec : function(callback) {

        var me = this;
        var ret = {
            adapterName : me.getAdapterName(),
            database : me.getDatabase()
        };

        // スキーマ情報取得
        me.schema(function(info) {
            ret['schema'] = info;

            // テーブル情報取得
            me.getTableInfo(function(info) {
                ret['tableinfo'] = info;

                // トランザクション開始
                me.beginTrans(function(info) {

                    // ロールバック
                    me.rollback(function(info) {

                        // トランザクション開始
                        me.beginTrans(function(info) {

                            // コミット
                            me.commit(function(info) {

                                callback(ret);
                            });

                        });

                    });

                });

            });

        });

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
