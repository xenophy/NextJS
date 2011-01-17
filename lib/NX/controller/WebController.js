/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var parseUrl = require('url').parse,
    path = require('path'),
    queryString = require('querystring');

// }}}
// {{{ NX.WebController

/**
 * @class NX.WebController
 */
NX.WebController = NX.extend(NX.controller.AbstractController, {

    // {{{ constructor

    /**
     * @method WebController
     */
    constructor : function(config) {

        var me = this,
            url = parseUrl(config.request.url);

        // 設定適用
        NX.apply(me, config || {});

        // ビュー生成
        eval('me.view = new NX.' + NX.config.view.type + 'View();');

        // ビュー初期化
        me.view.init({
            request: me.request,
            response: me.response,
            configs: me.configs,
            url: url,
            template : path.join(me.contents, queryString.unescape(url.pathname))
        });

        // スーパークラスメソッドコール
        NX.WebController.superclass.constructor.call(me);


        me.mods = {};
        me.on('bindmodule', function(name, mod) {
            me.action[name] = me.mods[name] = mod;
        });


    },

    // }}}
    // {{{ execute

    /**
     * @method execute
     */
    execute : function() {

        var me = this;

        me.action = me[me.action];

        if(me.action) {

            // NX.Actionクラス化
            if(!(me.action instanceof NX.Action)) {
                me.action = new (NX.extend(NX.Action, {
                    controller: me,
                    execute : me.action
                }));
            } else {
                me.action.controller = me;
            }

            // モジュールバインド
            NX.each(me.use, function(name) {
                me.bindModule(name);
            });

            if(me.request.method === 'POST') {
                me.action.post = me.request.body;
            } else {
                me.action.get = me.request.body;
            }

            // アクション実行終了イベントハンドラ
            me.on('end', function() {

                // ビューレンダリング
                me.view.render(me.results);

            });

            // アクション実行
            me.action.execute.call(me.action, me.request, me.response);

        } else {

            // ビューレンダリング
            me.view.render();

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
