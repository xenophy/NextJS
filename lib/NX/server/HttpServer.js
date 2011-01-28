/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var http = require('http');
var fs = require('fs');
var sys = require('sys');
var querystring = require('querystring');
var connect = require('connect');
var formidable = require('formidable');
var util = require('util');

// }}}
// {{{ namespace

NX.ns('NX.server');

// }}}
// {{{ NX.server.HttpServer

/**
 * @class NX.server.HttpServer
 */
Server = NX.server.HttpServer = NX.extend(require('events').EventEmitter, {

    // {{{ constructor

    /**
     * @method constructor
     */
    constructor : function(cfg) {

        cfg = cfg || {};

        var me = this;

        // 設定適用
        NX.apply(me, cfg);
        NX.applyIf(me, {
            servers: [],
            errorDocument : {},
            Error500: fs.readFileSync(process.NXEnv.libdir + '/config/error/HTTP_INTERNAL_SERVER_ERROR.html', 'utf8'),
            mimetype : {},
            sessionConfig : {}
        });

        // エラードキュメント設定
        NX.applyIf(me.errorDocument, require('../config/http/error'));

        // mimetype設定
        NX.applyIf(me.mimetype, require('../config/http/mimetype'));

        // セッション設定
        NX.applyIf(me.sessionConfig, require('../config/session'));

        // ルート設定
        if(!NX.isArray(me.servers)) {
            throw new Error('specify an array of listeners.');
        }

        // スーパークラスメソッドコール
        Server.superclass.constructor.apply(me, arguments);

        // 内部処理例外対応
        process.on('uncaughtException', function(err) {

            console.log(err.stack);

            var req = me.active.req;
            var res = me.active.res;

            formatLine = function(v) {
                return '<li>' + v + '</li>';
            };

            var accept = req.headers.accept || '';

            if(accept.indexOf('html') !== -1) {

                var stack = err.stack
                    .split('\n').slice(1)
                    .map(formatLine).join('');
                var html = me.Error500
                    .toString('utf8')
                    .replace('{stack}', stack)
                    .replace(/\{error\}/g, err.toString());

                res.writeHead(500, {'Content-Type': 'text/html'});
                res.write(html);
                res.end();

            } else if(accept.indexOf('json') !== -1) {

                var json = NX.encode({ error: err });
                res.writeHead(500, {'Content-Type': 'application/json'});
                res.write(json);
                res.end(end);

            } else {

                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.write(err.stack);
                res.end();

            }

        });

        // サーバーオブジェクト生成
        var srv = [];
        me.active = {};
        me.servers.forEach(function(item) {

            if(!NX.isNumber(item.port)) {
                throw new Error('specify an number of port.');
            }

            NX.apply(item, {
                errorDocument: me.errorDocument,
                mimetype: me.mimetype,
            });

            var o = {
                port: item.port,
                host: item.host,
                listener: function(req, res, next) {

                    me.active.req = req;
                    me.active.res = res;


                    /*
                    o.dispatcher.cookies = cookies;

                    var writeHead = res.writeHead;
                    res.writeHead = function(status, headers){

                        console.log(o.dispatcher.cookies);

                        res.writeHead = writeHead;
                        return res.writeHead(status, headers);
                    };
                    */

                    // ディスパッチ
                    o.dispatcher.dispatch(req, res);

                }
            };

            o.sessionStore = new connect.session.MemoryStore(me.sessionConfig.memory);

            o.server = connect.createServer(
                connect.bodyDecoder(),
                connect.cookieDecoder(),
                connect.session({
                    key: me.sessionConfig.key,
                    secret: me.sessionConfig.secret,
                    store: o.sessionStore
                }),
                (function(req, res, next) {

                    if(
                        req.headers['content-type'] &&
                        NX.isString(req.headers['content-type']) &&
                        req.headers['content-type'].indexOf('multipart/form-data;') === 0 &&
                        req.method &&
                        NX.isString(req.method) &&
                        req.method.toUpperCase() === 'POST'
                    ) {
                        var form = new formidable.IncomingForm(),
                            files = {}
                            fields = {};

                        form.uploadDir = '/tmp/';

                        form
                        .on('field', function(field, value) {
                            fields[field] = value;
                        })
                        .on('file', function(field, file) {
                            files[field] = file;
                        })
                        .on('end', function() {
                            /*
                            res.writeHead(200, {'content-type': 'text/plain'});
                            res.write('received fields:\n\n '+util.inspect(fields));
                            res.write('\n\n');
                            res.end('received files:\n\n '+util.inspect(files));
                            */

                            req.files = files;
                            req.body = fields;

                            next();
                        });
                        form.parse(req);


                    } else {

                        next();

                    }

                }),
                o.listener
            );

            if(item.websocket) {
                o.websocket = item.websocket;
            }

            // ディスパッチャー生成
            o.dispatcher = new NX.server.Dispatcher(item);

            srv.push(o);
        });
        me.servers = srv;

    },

    // }}}
    // {{{ listen

    listen: function() {

        this.servers.forEach(function(o) {

            o.server.listen(o.port, o.host);

            if(o.dispatcher.websocket) {

                if(!(o.websocket instanceof NX.WebSocketController)) {

                    var file = o.websocket;
                    file = o.dispatcher.controllers + '/' + file;

                    // TODO:コントローラーファイルが存在しない場合に例外発生

                    var cls = require(file);
                    o.dispatcher.websocket = new cls();
                }

                require('socket.io').listen(o.server).on('connection', function(client) {
                    o.dispatcher.dispatchSocket(client, this);
                });
            }

        });
    }

    // }}}

});

// }}}
// {{{ createServer

/**
 * @method HttpServer.createServer
 */
Server.createServer = function(cfg) {
    return new NX.server.HttpServer(cfg);
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
