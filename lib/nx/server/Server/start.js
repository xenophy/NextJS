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
        spawn = NX.ChildProcess.spawn,
        cluster = require('cluster'),
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
        virtualhost = config.virtualhost || [],
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

            // ワーカーへ通知する設定作成
            var wconfig = NX.apply({}, config);

            // ローダー設定
            if(NX.Loader.config.enabled) {
                wconfig.LoaderSettings = NX.Loader.config;
            }

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
                    res.actionAllowExt = config.action.allowExt;
                    res.actionTimeout = config.action.timeout;
                    res.accessStartTime = NX.microtime(true);
                    res.accessStartDate = new Date();
                    next();
                },

                NX.server.Server.bodyParser(),
                NX.server.Server.cookieParser(),
                NX.server.Server.sessionProvider(config.session),
                NX.server.Server.requestParser(config),
                NX.server.Server.multipartParser(),

                // バーチャルホスト設定初期化
                NX.server.Server.$initVirtualHost(),

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

            if(cluster.isMaster && workers > 0) {

                for (var i = 0; i < workers; i++) {
                    fs.writeFileSync(lock + '.worker' + i, cluster.fork().pid.toString());
                }

            } else {

                NX.servers = NX.servers || {};
                NX.servers[config.serverId] = NX.create('NX.server.Http', middleware);
                NX.servers[config.serverId].listen(port, host);

                NX.create('NX.app.Socket', {
                    serverConfig: config,
                    server: NX.servers[config.serverId],
                    allowExt: config.action.allowExt,
                    paths: config.paths
                });

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

                if(cluster.isMaster && sslWorkers > 0) {

                    var i = 0;

                    if(workers > 0) {
                        i = workers;
                    }

                    for (; i < sslWorkers; i++) {
                        fs.writeFileSync(lock + '.worker' + i, cluster.fork().pid.toString());
                    }

                } else {

                    // HTTPSサーバー生成
                    NX.servers = NX.servers || {};
                    NX.servers[config.serverId] = NX.create('NX.server.Https', middleware, o);
                    NX.servers[config.serverId].listen(ssl.port, ssl.host);

                    NX.create('NX.app.Socket', {
                        serverConfig: config,
                        server: NX.servers[config.serverId],
                        allowExt: config.action.allowExt,
                        paths: config.paths
                    });

                }

            }

            // uncaughtException
            process.on('uncaughtException', NX.server.Server.onUncaughtException);

            // 次へ
            config.next();

        });

    };

    if(enableDaemon && cluster.isMaster) {

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
