/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var sys = require('sys'),
    path = require('path'),
    fs = require('fs'),
    url = require('url');

// }}}
// {{{ NX.server.Dispatcher

/**
 * @class NX.server.Dispatcher
 */
NX.server.Dispatcher = NX.extend(NX.server.AbstractDispatcher, {

    // {{{ constructor

    /**
     * @method Dispatcher
     */
    constructor : function() {

        var me = this;

        NX.apply(me, {
            WebSocketController: null
        });

        // スーパークラスメソッドコール
        NX.server.Dispatcher.superclass.constructor.apply(me, arguments);
    },

    // }}}
    // {{{ errorHandler

    errorHandler : function(err, req, res) {

        var me = this;
        var e = err;
        var accept = req.headers.accept || '';

        if(accept.indexOf('html') !== -1) {

            var html = me.Error500;
            var tpl = new NX.Template();

            html = tpl.fetch(html, {
                error: e.toString(),
                stack: e.stack.split('\n').slice(1)
            });

            res.writeHead(500, {'Content-Type': 'text/html'});
            res.write(html);
            res.end();

        } else if(accept.indexOf('json') !== -1) {

            var json = NX.encode({ error: err });
            res.writeHead(500, {'Content-Type': 'application/json'});
            res.write(json);
            res.end();

        } else {

            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.write(err.stack);
            res.end();

        }

    },

    // }}}
    // {{{ dispatch

    /**
     * @method dispatch
     */
    dispatch : function(req, res, next) {

        var me = this;
        var basename = path.basename(require('url').parse(req.url, true).pathname);
        var dirname = path.dirname(req.url);
        req.path = dirname;

        var action = basename || 'index';

        if(req.path == '/' && basename.substr(-1) !== '/') {
            req.path = me.appControlerName + '.js';
        } else {
            if(basename.substr(-1) === '/') {
                req.path = req.url.substr(0, req.url.length - 1) + '.js';
                action = 'index';
            } else {
                req.path = dirname + '.js';
            }
        }

        var actionPath;
        if(basename.substr(-1) === '/') {
            actionPath = req.url.substr(0, req.url.length - 1);
        } else {
            actionPath = dirname;
        }

        var extPos = action.indexOf('.');
        if(extPos > 0) {
            action = action.substr(0, extPos);
        }

        // スーパークラスメソッドコール
        NX.server.Dispatcher.superclass.dispatch.call(me, arguments);

        // コントローラーパス取得
        req.file = path.normalize(me.controllersPath + '/' + req.path);

        // コントローラークラスファイル存在確認
        path.exists(req.file, function(exists) {

            var controller,
            o = {
                path: me.path,
                actionPath: actionPath,
                actionsPath: me.actionsPath,
                modulePath: me.modulesPath,
                configPath: me.configsPath,
                contentPath: me.contentsPath,
                controllerPath: me.controllersPath,
                mimetype: me.mimetype,
                errorDocument: me.errorDocument,
                actionName: action,
                request : req,
                response : res,
                onReady: function(controller) {

                    try {

                        // コントローラー実行
                        controller.execute();

                    } catch(err) {

                        me.errorHandler(err, req, res);

                    }

                }
            };

            try {

                // コントローラーが存在する場合、Viewオブジェクトを渡す。
                if(exists) {

                    // コントローラーキャッシュクリア
                    NX.moduleCacheClear(req.file);

                    // コントローラー生成
                    var controllerCls = require(req.file);
                    controller = new controllerCls(o);

                } else {

                    // コントローラー生成
                    controller = new NX.WebController(o);

                }

            } catch(err) {

                me.errorHandler(err, req, res);

            }
        });

    },

    // }}}
    // {{{ dispatchSocket

    dispatchSocket : function(client, io) {

        var me = this;

        me.websocket.connect.call(this, client);

        // {{{ message

        client.on('message', function(message) {
            var ctrl = me.websocket;
            ctrl.message.apply(this, [message, client]);
        });

        // }}}
        // {{{ disconnect

        client.on('disconnect', function(){

            var ctrl = me.websocket;
            ctrl.disconnect.apply(this, [client]);

        });

        // }}}

    }

    // }}}

});

// }}}

