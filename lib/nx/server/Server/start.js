/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.server.Server.start

module.exports = function(config) {

    var me = this,
        fs = NX.Fs,
        netBinding = process.binding('net'),
        spawn = NX.ChildProcess.spawn,
        net = require('net'),
        serverSocket = netBinding.socket('tcp4'),
        enableDaemon = config.enableDaemon,
        port = config.port,
        host = config.host,
        log = config.logFile,
        lock = config.lockFile;
        backlog = config.backlog;
        workers = config.workers,
        ssl = config.ssl,
        sslWorkers = false,
        session = config.session,
        http = NX.Http,
        https = NX.Https;

    if(NX.isObject(ssl)) {
        if(NX.isNumber(ssl.workers)) {
            sslWorkers = ssl.workers;
        }
    }

    var callback = function(err, pid) {

        // デーモン化完了
        var util  = require('util'),
            spawn = require('child_process').spawn,
            rm    = spawn('rm', ['-Rf /tmp/.*' + port + '.' + session.key]);

        var util = require('util'),
            exec = require('child_process').exec,
            child;

        child = exec('rm -rf /tmp/*.' + port + '.' + session.key, function (error, stdout, stderr) {

            var isWorker = true;

            // ワーカーへ通知する設定作成
            var wconfig = NX.apply({}, config);

            var worder = {
                type: 'init',
                config: wconfig
            };

            var sslworder = {
                type: 'init',
                config: wconfig
            };

            // ミドルウェア定義
            var middleware = [

                // 開始時間
                function(req, res, next) {
                    res.accessStartTime = NX.microtime(true);
                    res.accessStartDate = new Date();
                    next();
                },

                NX.server.Server.bodyParser(),
                NX.server.Server.cookieParser(),
                NX.server.Server.sessionProvider(config.session),
                NX.server.Server.requestParser(config),
                NX.server.Server.multipartParser(),

                // ディスパッチ
                NX.Dispatcher.dispatch(),

                // 終了時間
                function(req, res, next) {
                    res.accessEndTime = NX.microtime(true);
                    next();
                },

                // アクセスログ出力
                NX.server.log.Access.output(me, config)
            ];

            if(workers !== false) {

                if(workers > 0) {

                    // バインド＆リスン
                    netBinding.bind(serverSocket, port, host);
                    netBinding.listen(serverSocket, backlog);

                    for(var i = 0; i < workers; i++) {

                        var fds = netBinding.socketpair();
                        var child = spawn(process.argv[0],[require('path').normalize(__dirname + '/../Worker/index.js')], { customFds: [fds[0], 1, 2] });
                        var workerLockFile = lock + '.worker' + i;

                        // ワーカーロックファイル生成
                        fs.writeFileSync(workerLockFile, child.pid.toString());

                        var socket = new net.Stream(fds[1], 'unix');

                        socket.write(NX.JSON.encode(worder), 'utf8', serverSocket);
                    }

                }

            } else {

                isWorker = false;

                // HTTPサーバー生成
                NX.servers = NX.servers || {};
                NX.servers[config.serverId] = NX.create('NX.server.Http', middleware);
                NX.servers[config.serverId].listen(port, host);

            }

            if(ssl) {

                // 証明書取得
                var key = fs.readFileSync(ssl.key);
                var cert = fs.readFileSync(ssl.cert);

                var o = {
                    key: key.toString(),
                    cert: cert.toString()
                };

                if(ssl.ca) {

                    if(NX.isString(ssl.ca)) {

                        o.ca = fs.readFileSync(ssl.ca);

                    } else if(NX.isArray(ssl.ca)) {

                        o.ca = [];

                        NX.iterate(ssl.ca, function(item) {
                            o.ca.push(fs.readFileSync(item).toString());
                        });

                    }

                }

                if(sslWorkers !== false) {

                    if(sslWorkers > 0) {

                        // バインド＆リスン
                        netBinding.bind(serverSocket, ssl.port, ssl.host);
                        netBinding.listen(serverSocket, backlog);

                        sslworder.config.serverType = 'https';

                        NX.apply(sslworder.config, o);

                        for(var i = 0; i < sslWorkers; i++) {

                            var fds = netBinding.socketpair();
                            var child = spawn(process.argv[0],[require('path').normalize(__dirname + '/../Worker/index.js')], { customFds: [fds[0], 1, 2] });
                            var workerLockFile = lock + '.worker' + i;

                            // ワーカーロックファイル生成
                            fs.writeFileSync(workerLockFile, child.pid.toString());

                            var socket = new net.Stream(fds[1], 'unix');

                            socket.write(NX.JSON.encode(sslworder), 'utf8', serverSocket);
                        }

                    }

                } else {

                    isWorker = false;

                    // HTTPSサーバー生成
                    NX.servers = NX.servers || {};
                    NX.servers[config.serverId] = NX.create('NX.server.Https', middleware, o);
                    NX.servers[config.serverId].listen(ssl.port, ssl.host);

                }

            }

            // uncaughtException
            process.on('uncaughtException', function(err) {

                var req = NX.currentRequest;
                var res = NX.currentResponse;

                // エラードキュメントファイルパス取得
                file = NX.WebView.errorDocument[500];

                var headers = {
                    "Content-Type": NX.WebView.mimetype.html,
                };

                var data = NX.Fs.readFileSync(file);
                data = data.toString();
                data = data.replace(/\<!--\{msg\}--\>/g, err.message);
                data = data.replace(/\<!--\{stack\}--\>/g, err.stack);

                res.writeHead(500, headers);
                res.end(data);
            });

            // 次へ
            config.next();

        });

    };

    if(enableDaemon) {

        // プロセスのデーモン化
        NX.daemon.Daemon.daemonize(log, lock, function(err, pid) {

            if(err) {
                return console.log('Error starting daemon: ' + err);
            }

            callback(null, pid);

            console.log('Daemon started successfully with pid: ' + pid);

        });

    } else {

        callback(null, process.pid);

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
