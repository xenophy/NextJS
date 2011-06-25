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
        me.callParent(arguments);
    },

    // }}}
    // {{{ execute

    execute: function(config) {

        var me = this, res = me.res;

        // スーパークラスメソッドコール
        me.callParent(arguments);


        // アクション実行


        // 処理結果取得
        me.view.render({}, me.req, me.res);

    },

    // }}}
    // {{{ init

    init: function() {

        var me = this;

        // ビュー生成
        me.view = new NX.WebView(me.paths, me.req, me.res);

        // モジュール生成
        //console.log(me.view.paths.template);


        me.onReady();

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
