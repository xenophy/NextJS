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

        // ユーザー設定読み込み
        me.config = {};
        NX.each(['database', 'view'], function(type) {
            me.loadConfig(type);
        });

        // クッキー配列
        me.cookies = [];

        // ビュー生成
        eval('me.view = new NX.' + me.config.view.type + 'View();');

        // ビュー初期化
        me.view.init({
            path: me.path,
            request: me.request,
            response: me.response,
            configs: me.configs,
            mimetype: me.mimetype,
            errorDocument: me.errorDocument,
            url: url,
            template : path.join(me.contentPath, queryString.unescape(url.pathname))
        });

        // スーパークラスメソッドコール
        NX.WebController.superclass.constructor.call(me);
    },

    // }}}
    // {{{ setCookie

    setCookie : function(name, value, options) {

        var me = this;
        var cookies = this.cookies || ( this.cookies = [] ),
            cookie = [ name, "=", value, ";" ];

        options = options || {};

        if(options.expires) {
            cookie.push(" expires=", (new Date(options.expires)).toUTCString(), ";");
        }

        if(options.path) {
            cookie.push(" path=", options.path, ";");
        }

        if(options.domain) {
            cookie.push(" domain=", options.domain, ";");
        }

        if(options.secure) {
            cookie.push(" secure", ";");
        }

        if(options.httpOnly) {
            cookie.push(" httpOnly");
        }

        cookies.push(cookie.join(""));
    },

    // }}}
    // {{{ getCookie

    getCookie : function(name) {

        return this.parsedCookie[name] || null;
    },

    // {{{ execute

    /**
     * @method execute
     */
    execute : function() {

        var me = this;
        var res = me.response;
        var COOKIE_KEY = 'Set-Cookie';
        var writeHead = res.writeHead;
        res.writeHead = function(status, headers){

            headers = headers || {};

            var prev = headers[COOKIE_KEY] || [],
            cookies = me.cookies || [];

            cookies = cookies.concat(prev);

            if(cookies.length > 0) {
                headers[COOKIE_KEY] = cookies.join(" ");
            }

            res.writeHead = writeHead;
            return res.writeHead(status, headers);
        };

        // コントローラー終了イベントハンドラ
        me.on('end', function() {

            // ビューレンダリング
            me.view.render(me.results);

        });

        // アクションセットアップイベントハンドラ
        me.on('actionsetup', function(action) {

            // パラメータ初期化
            NX.apply(action, {
                get: {},
                post: {},
                request: {}
            });

            // リクエスト/レスポンスオブジェクト設定
            action.__request = me.request;
            action.__response = me.response;

            // アクションにPOST/GETパラメータアクセスを追加
            var p = require('url').parse(me.request.url, true);
            NX.apply(action.get, p.query);
            NX.apply(action.request, action.get);
            if(me.request.method === 'POST') {
                NX.apply(action.post, me.request.body);
                NX.apply(action.request, action.post);
            }

            // アクションにファイルアップロード情報のアクセスを追加
            action.files = me.request.files;

            // アクションにセッションアクセスを追加
            action.session = me.request.session;

        });

        // {{{ 送られてきたクッキー解析

        var header = me.request.headers['cookie'] || "";
        var ret = {};

        header.split(";").forEach( function(cookie) {
            var parts = cookie.split("="),
            name = (parts[0] ? parts[0].trim() : ''),
            value = (parts[1] ? parts[1].trim() : '');
            ret[name] = value;
        });

        me.parsedCookie = ret;

        // }}}

        // スーパークラスメソッドコール
        NX.WebController.superclass.execute.call(me);

        if(me.action.length > 0) {
            me.emit('controllerready');
        } else {
            me.emit('end');
        }

    },

    // }}}
    // {{{ setTemplate

    setTemplate : function(file) {

        var me = this;

        me.view.setTemplate(path.join(me.contentPath, file));

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
