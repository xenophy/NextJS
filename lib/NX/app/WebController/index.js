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

    },

    // }}}
    // {{{ execute

    execute: function(config) {

        var me = this, req = me.req, res = me.res;

        // スーパークラスメソッドコール
        me.callParent(arguments);

        // ビュー生成
        me.view = new NX.WebView(me.paths, me.req, me.res);

        if(me.actions.length > 0 && me.actions[0].define) {

            var action = me.actions[0];
            var cls = action.define;

            cls.next = action.next;

            // 次のアクションへ引き継ぐもの
            var p = NX.Url.parse(req.url, true);

            var get = {};
            if(p.search) {
                get = require('querystring').parse(p.search.substr(1));
            };

            NX.apply(cls, {
                get: NX.clone(get),
                request: NX.clone(p.query)
            });

            if(req.method === 'POST') {
                NX.apply(cls.post, NX.clone(req.body));
                NX.apply(cls.request, NX.clone(req.body));
            }

            cls.controller = this;

            // アクション実行
            cls.execute.call(cls, this);

        } else {

            if(me.actions.length === 0) {

                // 処理結果取得
                me.view.render({});

            }

        }

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
