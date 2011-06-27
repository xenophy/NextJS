/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.app.Dispatcher

NX.define('NX.app.Dispatcher', {

    // {{{ alternateClassName

    alternateClassName: 'NX.Dispatcher',

    // }}}
    // {{{ dispatch

    dispatch: function(config) {

        var me = this, controller;

        config = config || {};

        var req = config.req;
        var res = config.res;
        // リクエスト解析

        (function(req, res, callback) {

            var mime = function(req) {
                var str = req.headers['content-type'] || '';
                return str.split(';')[0];
            };

            var parse = {
                'application/x-www-form-urlencoded': require('querystring').parse,
                'application/json': JSON.parse
            };

            if('GET' == req.method || 'HEAD' == req.method) {
                callback();
            } else {

            var parser = parse[mime(req)];

            if(parser && !req.body) {

                var data = '';

                req.setEncoding('utf8');
                req.on('data', function(chunk) {
                    data += chunk;
                });

                req.on('end', function() {

                    req.rawBody = data;

                    try {

                        req.body = data ? parser(data) : {};

                    } catch (e) {

                        return callback(e);

                    }

                    callback();
                });


            } else {
                callback();
            }
            }

        })(req, res, function(err) {

            // TODO:errが真なら、速攻500エラー表示


            NX.apply(config, {

                // {{{ onReady

                onReady: function() {
                    controller.execute();
                }

                // }}}

            });

            // コントローラー生成
            controller = new NX.WebController(config);

            // コントローラー初期化
            controller.init();

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
