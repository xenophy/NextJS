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

    },

    // }}}
    // {{{ add

    add : function(callback) {

        var me = this;
        var data = {name: 'system:' + NX.microtime()};

        me.insert(data, function(info) {
            callback(info);
        });
    },

    // }}}
    // {{{ write

    write : function(callback) {

        var me = this;
        var data = {name: 'kotsutsumi:' + NX.microtime()};
        var where = 'id = 0';

        me.update(data, where, function(info) {

            var id = me.lastId();
            var where = 'id = ' + id;

            /*
            me.delete(where, function(info) {

            });
            */
            callback(info);

        });
    },

    // }}}
    // {{{ clear

    clear : function(callback) {

        var me = this;
        me.truncate(function(info) {
            callback();
        });

    },

    // }}}
    // {{{ found

    found : function(callback) {

        var me = this;
        var cond = {
            fields: ['name']
        };

        me.find('first', cond, function(info) {
            callback(info);
        });

    },

    // }}}
    // {{{ foundall

    foundall : function(callback) {

        var me = this;
        var cond = {
            fields: ['name']
        };

        me.find('all', cond, function(info) {
            callback(info);
        });

    },

    // }}}
    // {{{ locks

    locks : function(callback) {

        var me = this;

        // テーブルロック
        me.lock(['users'], function(info) {

            // テーブルロック解除
            me.unlock(function(info) {

                callback(info);
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
