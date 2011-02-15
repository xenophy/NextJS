/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ mod1

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
            autoReconnect: false,
            port: '12345'
        });

        // 接続
        me.connect(function() {
            cb({
                connect: true
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
