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
    // {{{ dispatch

    /**
     * @method dispatch
     */
    dispatch : function(req, res) {

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

        var extPos = action.indexOf('.');
        if(extPos > 0) {
            action = action.substr(0, extPos);
        }

        // スーパークラスメソッドコール
        NX.server.Dispatcher.superclass.dispatch.call(me, arguments);

        // コントローラーパス取得
        req.file = path.normalize(me.controllers + '/' + req.path);

        // コントローラークラスファイル存在確認
        path.exists(req.file, function(exists) {

            var controller,
            o = {
                path: me.path,
                modulePath: me.modules,
                configPath: me.configs,
                contentPath: me.contents,
                controllerPath: me.controllers,
                mimetype: me.mimetype,
                errorDocument: me.errorDocument,
                action: action,
                request : req,
                response : res
            };

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

            controller.on('ready', function() {

                // コントローラー実行
                controller.execute();

            });

            if(!exists || controller.use.length === 0) {
                controller.emit('ready');
            }

        });

    }

    // }}}

});

// }}}

