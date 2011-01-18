/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var sys = require('sys'),
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

        if(process.connectEnv.showErrorStack !== undefined) {
            showStack = NX.toBoolean(process.connectEnv.showErrorStack);
        }

        if(process.connectEnv.showErrorMessage !== undefined) {
            showMessage = NX.toBoolean(process.connectEnv.showErrorMessage);
        }

        if(process.connectEnv.dumpExceptions !== undefined) {
            dumpExceptions = NX.toBoolean(process.connectEnv.dumpExceptions);
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

                    var filename = NX.env.libdir + '/config/error/HTTP_INTERNAL_SERVER_ERROR.html';

                    NX.fs.readFile(filename).next(function(html) {

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
    constructor : function(config) {

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
        var url = req.url;
        var pi = NX.fs.pathinfo(url);

        var path = url.substr(0, url.length - pi.basename.length);

        if(path == '/') {
            path = me._appControlerName + '.js';
        } else {
            path = path.substr(1, path.length - 2) + '.js';
        }

        var action = pi.basename || 'index';
        var extPos = action.indexOf('.');
        if(extPos > 0) {
            action = action.substr(0, extPos);
        }

        // スーパークラスメソッドコール
        NX.server.Dispatcher.superclass.dispatch.call(me, arguments);

        // コントローラーパス取得
        var file = me.controllers + '/' + path;

        NX.fs.exists(file).next(function(exists) {

            var controller,
                o = {
                    path: me.path,
                    modules: me.modules,
                    configs: me.configs,
                    contents: me.contents,
                    action: action,
                    request : req,
                    response : res
                };

            try {

                // コントローラーが存在する場合、Viewオブジェクトを渡す。
                if(exists) {

                    // コントローラーキャッシュクリア
                    NX.moduleCacheClear(file);

                    // コントローラー生成
                    var controllerCls = require(file);
                    controller = new controllerCls(o);

                } else {

                    // コントローラー生成
                    controller = new NX.WebController(o);

                }

                // コントローラー実行
                controller.execute();

            } catch(e) {

                // エラーハンドラー実行
                me.errorHandler({
                    showStack: true,
                    dumpExceptions: true
                })(e, req, res);

            }
        });

    },

    // }}}
    // {{{ websocket

    websocket : function(client, io) {

        var me = this;

        // WebSocketコントローラー生成
        if(!(me.WebSocketController instanceof NX.WebSocketController)) {

            var file = me.WebSocketController;

            file = me.controllers + '/' + file;

            // TODO:コントローラーファイルが存在しない場合に例外発生
            var cls = require(file);
            me.WebSocketController = new cls({
                client: client,
                io: io
            });

            // クライアント側に準備完了を送信？

        }

        me.WebSocketController.connect.call(this, client);

//        me.WebSocketController.fireEvent('wsconnect');

        // {{{ message

        client.on('message', function(message) {

            var ctrl = me.WebSocketController;

            ctrl.message.apply(this, [message, client]);

//            ctrl.fireEvent('wsmessage');

        });

        // }}}
        // {{{ disconnect

        client.on('disconnect', function(){

            var ctrl = me.WebSocketController;

            ctrl.disconnect.apply(this, [client]);

//            ctrl.fireEvent('wsdisconnect');

        });

        // }}}

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
