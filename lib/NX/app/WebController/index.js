/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.app.WebController

NX.define('NX.app.WebController', {

    // {{{ extend

    extend: 'NX.app.AbstractController',

    // }}}
    // {{{ alternateClassName

    alternateClassName: 'NX.WebController',

    // }}}
    // {{{ constructor

    constructor: function(config) {

        var me = this;

        // スーパークラスメソッドコール
        this.callParent(arguments);

        // ビュー生成
        me.view = new NX.WebView(me.paths, me.req, me.res);


    },

    // }}}
    // {{{ execute

    execute: function(config) {

        var me = this, res = me.res;

        // スーパークラスメソッドコール
        me.callParent(arguments);

        // アクション実行
        me.actions.forEach(function(action, i) {

            var cls = action.define;

            if(cls) {

                cls.execute();

            }

        });

        // 処理結果取得
        me.view.render({}, me.req, me.res);

    }

    // }}}

}, function() {

});

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
