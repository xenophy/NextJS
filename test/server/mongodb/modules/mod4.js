/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ mod4

module.exports = NX.extend(NX.Module, {

    // {{{ autoConnect

    autoConnect : false,

    // }}}
    // {{{ use

    use : process.NXEnv.testdb,

    // }}}
    // {{{ scenario

    scenario : function(cb) {

        var me = this;

        // アダプター生成
        me.createAdapter({
            adapter: 'mongo',
            host: 'localhost',
            user: '',
            password: '',
            database: me.use,
            port: '27017'
        });

        // 接続
        me.connect(function() {

            // コレクション作成
            me.createCollection('mongodbtest_mod4', function() {

                // コレクション名変更
                me.renameCollection('mongodbtest_mod4', 'mongodbtest_mod4_rename' , function() {

                    // コレクション名一覧取得
                    me.collectionNames(function(names) {

                        var exists = false;
                        names.forEach(function(o) {
                            if(o.name === me.use + '.mongodbtest_mod4_rename') {
                                exists = true;
                            }
                        });

                        if(!exists) {
                            cb(false);
                        } else {

                            // コレクション削除
                            me.dropCollection('mongodbtest_mod4_rename', function() {

                                // コレクション名一覧取得
                                me.collectionNames(function(names) {

                                    var exists = false;
                                    names.forEach(function(o) {
                                        if(o.name === me.use + '.mongodbtest_mod4_rename') {
                                            exists = true;
                                        }
                                    });

                                    if(exists) {
                                        cb(false);
                                    } else {
                                        cb(true);
                                    }

                                });

                            });

                        }

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
