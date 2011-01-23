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

    // {{{ errorHandler

    /**
     * @method errorHandler
     */
    errorHandler : function(options) {

        var me = this;

        options = options || {};

        var showStack = options.showStack,
            showMessage = options.showMessage,
            dumpExceptions = options.dumpExceptions,
            formatUrl = options.formatUrl;

        if(process.NXEnv.showErrorStack !== undefined) {
            showStack = NX.toBoolean(process.NXEnv.showErrorStack);
        }

        if(process.NXEnv.showErrorMessage !== undefined) {
            showMessage = NX.toBoolean(process.NXEnv.showErrorMessage);
        }

        if(process.NXEnv.dumpExceptions !== undefined) {
            dumpExceptions = NX.toBoolean(process.NXEnv.dumpExceptions);
        }

        var formatLine = function(v) {
            return '<li>' + v + '</li>';
        };

        if(formatUrl) {
            var parts,
                re = /(\/[^\(\)]+):(\d+):(\d+)/;
            var formatters = {
                'file': function(parts) {
                    return {
                        'protocol':'file',
                        'hostname':'' + parts[1]
                    };
                },
                'txmt': function(parts) {
                    return {
                        'protocol':'txmt',
                        'hostname':'//open',
                        'query':{
                            'url':'file://' + parts[1],
                            'line': parts[2],
                            'column': parts[3]
                        }
                    };
                }
            };

            formatLine = function(v) {

                parts = v.match(re);

                if(parts) {
                    v = v.replace(parts[0],'<a href="'+url.format( formatters[formatUrl](parts) )+'">'+parts[0]+'</a>');
                }

                return '<li>' + v + '</li>';
            };
        }

        return function errorHandler(err, req, res) {

            if(dumpExceptions) {
                sys.error(err.stack);
            }

            if(showStack) {

                var accept = req.headers.accept || '';

                if(accept.indexOf('html') !== -1) {

                    var filename = process.NXEnv.libdir + '/config/error/HTTP_INTERNAL_SERVER_ERROR.html';

                    fs.readFile(filename, function(error, html) {

                        var stack = err.stack
                            .split('\n').slice(1)
                            .map(formatLine).join('');
                        html = html
                            .toString('utf8')
                            .replace('{stack}', stack)
                            .replace(/\{error\}/g, err.toString());
                        res.writeHead(500, {'Content-Type': 'text/html'});
                        res.end(html);
                    });

                } else if(accept.indexOf('json') !== -1) {

                    var json = JSON.stringify({ error: err });
                    res.writeHead(500, {'Content-Type': 'application/json'});
                    res.end(json);

                } else {

                    res.writeHead(500, {'Content-Type': 'text/plain'});
                    res.end(err.stack);

                }

            } else {

                var body = showMessage ? err.toString() : 'Internal Server Error';
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end(body);

            }

        };

    },

    // }}}
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
        var basename = path.basename(req.url);
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

                // コントローラー実行
                controller.execute();

            } catch(e) {

                // エラーハンドラー実行
                me.errorHandler({showStack: true, dumpExceptions: true})(e, req, res);

            }

        });

    }

    // }}}

});

// }}}

