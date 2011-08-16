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

    // NX.logをサーバー用に切り替える
    NX.server.Log.bind();

    var callback = function(err, pid) {

        // デーモン化完了
        var util  = require('util'),
            spawn = require('child_process').spawn,
            rm    = spawn('rm', ['-Rf /tmp/.*' + port + '.' + session.key]);

        var util = require('util'),
            exec = require('child_process').exec,
            child;

        child = exec('rm -rf /tmp/*.' + port + '.' + session.key, function (error, stdout, stderr) {

            // ワーカーへ通知する設定作成
            var wconfig = NX.apply({}, config);

            var worder = {
                type: 'init',
                config: wconfig
            };

            if(workers !== false) {

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

            } else {

                // ミドルウェア定義
                var middleware = [
                    NX.server.Server.bodyParser(),
                    NX.server.Server.cookieParser(),
                    NX.server.Server.sessionProvider(config.session),
                    NX.server.Server.requestParser(config),
                    NX.server.Server.multipartParser(),
                    NX.Dispatcher.dispatch()
                ];

                // HTTPサーバー生成
                NX.servers = NX.servers || {};
                NX.servers[config.serverId] = NX.create('NX.server.Http', middleware);
                NX.servers[config.serverId].listen(port, host);

                // 次へ
                config.next();

            }

            if(ssl) {

                // 証明書取得
                var key = fs.readFileSync(ssl.key);
                var cert = fs.readFileSync(ssl.cert);

                var o = {
                    key: key,
                    cert: cert
                };

                if(ssl.ca) {

                    if(NX.isString(ssl.ca)) {
                        o.ca = fs.readFileSync(ssl.ca);
                    } else if(NX.isArray(ssl.ca)) {

                        o.ca = [];

                        NX.iterate(ssl.ca, function(item) {
                            o.ca.push(fs.readFileSync(item));
                        });

                    }

                }



                // HTTPSサーバー生成
                (new NX.server.Https(middleware, o)).listen(ssl.port, ssl.host);

            }

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
