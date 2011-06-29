/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.app.WebController.execute

module.exports = function(config) {

    var me = this, req = me.req, res = me.res;

    // スーパークラスメソッドコール
    me.callParent(arguments);

    // ビュー生成
    me.view = new NX.WebView(me.paths, me.req, me.res);

    this.cookies = [];

    var writeHead = res.writeHead;
    res.writeHead = function(status, headers){

        var COOKIE_KEY = 'Set-Cookie';

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

    if(me.actions.length > 0 && me.actions[0].define) {

        var action = me.actions[0];
        var cls = action.define;

        cls.next = action.next;

        // 次のアクションへ引き継ぐもの

        // {{{ コントローラー設定

        cls.controller = this;

        // }}}
        // {{{ GET値解析

        NX.apply(cls, me.parseGetParameter(req.url));

        // }}}
        // {{{ POST値解析

        if(req.method === 'POST') {

            NX.apply(cls.post, NX.clone(req.body));
            NX.apply(cls.request, NX.clone(req.body));

        }

        // }}}
        // {{{ Cookie解析

        req.cookies = {};

        var cookie = req.headers.cookie;

        if(cookie) {

            try {
                req.cookies = (function(str) {

                    var obj = {}, pairs = str.split(/[;,] */);

                    for(var i=0, len=pairs.length; i < len; ++i) {

                        var pair = pairs[i],
                        eqlIndex = pair.indexOf('='),
                        key = pair.substr(0, eqlIndex).trim().toLowerCase(),
                        val = pair.substr(++eqlIndex, pair.length).trim();

                        if(val[0] === '"') {
                            val = val.slice(1, -1);
                        }

                        if(obj[key] === undefined) {
                            obj[key] = decodeURIComponent(val.replace(/\+/g, ' '));
                        }
                    }

                    return obj;

                })(cookie);

            } catch (err) {
                return next(err);
            }
        }

        cls.cookie = NX.apply({}, NX.clone(req.cookies));

        // }}}
        // {{{ セッション初期化

        /*
        var sessionConfig = me.config.session;
        me.initSession({
            req: req,
            res: res,
            ignore: sessionConfig.ignore,
            key: sessionConfig.key,
            secret: sessionConfig.secret,
            cookie: { maxAge: 60000 }
        });

        // }}}

        /*
        console.log(req.session.hoge);
        req.session.hoge = "teston";
        */

        cls.req = req;



        // アクション実行
        cls.execute.call(cls, this);

    } else {

        if(me.actions.length === 0) {

            // 処理結果取得
            me.view.render({});

        }

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
