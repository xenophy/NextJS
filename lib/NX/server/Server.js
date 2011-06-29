/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.server.Server

NX.define('NX.server.Server', {

    // {{{ extend

    extend: 'NX.server.AbstractServer',

    // }}}
    // {{{ singleton

    singleton: true,

    // }}}
    // {{{ lockFile

    lockFile: '/tmp/nxd.pid',

    // }}}
    // {{{ logFile

    logFile: '/tmp/nxd.log',

    // }}}
    // {{{ boot

    boot: function(config) {

        config = config || {};

        var me = this,
            args = process.argv,
            op = (args[2] || "").toLowerCase(),
            execPath = process.NXEnv.dirname;

        // 初期値設定
        NX.applyIf(config, {

            // アクション名
            actionName: 'index',

            // パス
            paths: {},

            // デーモン化
            enableDaemon: true,

            // ポート番号
            port: 3000,

            // ホスト
            host: '0.0.0.0',

            // SSL設定
            ssl: false,

            // ワーカー数
            workers: require('os').cpus().length,

            // バックログ
            backlog: 128,

            // プロセスロックファイル
            lockFile: '/tmp/nxd.pid',

            // プロセスログファイル
            logFile: '/tmp/nxd.log'
        });

        NX.apply(config.paths, {
            exec: execPath,
            configs: execPath + '/configs',
            modules: execPath + '/modules',
            contents: execPath + '/public',
            controllers: execPath + '/controllers',
            actions: execPath + '/actions'
        });

        for(idx in config.paths) {
            config.paths[idx] = NX.Path.normalize(config.paths[idx]);
        }

        if(!NX.isObject(config.ssl)) {
            config.ssl = false;
        } else {
            NX.applyIf(config.ssl, {
                host: '0.0.0.0'
            });
        }

        // セッション設定初期化
        if(!NX.isObject(config.session)) {
            config.session = {};
        }

        NX.applyIf(config.session, {

            // {{{ key

            key: 'nextjs.sid',

            // }}}
            // {{{ secret

            secret: process.NXEnv.sessionSecret,

            // }}}
            // {{{ ignore

            ignore: ['/favicon.ico'],

            // }}}

        });

        me.config = config;

        switch(op) {

            case 'start':
                me.start();
                break;

            case 'stop':
                me.stop();
                break;

            default:
                console.log('Usage: [start|stop]');
        }

    },

    // }}}
    // {{{ start

    start: function() {

        var me = this,
            fs = require('fs'),
            netBinding = process.binding('net'),
            spawn = require('child_process').spawn,
            net = require('net'),
            serverSocket = netBinding.socket('tcp4'),
            enableDaemon = me.config.enableDaemon,
            port = me.config.port,
            host = me.config.host,
            log = me.config.logFile,
            lock = me.config.lockFile;
            backlog = me.config.backlog;
            workers = me.config.workers,
            ssl = me.config.ssl,
            session = me.config.session,
            http = require('http'),
            https = require('https');

        var callback = function(err, pid) {

            if(err) {
                console.dir(err.stack);
                return console.log('Error starting daemon: ' + err);
            }

            // デーモン化完了

            // ワーカーへ通知する設定作成
            var wconfig = NX.apply({}, me.config);

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
                    var child = spawn(
                        process.argv[0],
                        [
                            require('path').normalize(__dirname + '/Worker.js')
                        ],
                        {
                            customFds: [fds[0], 1, 2]
                        }
                    );

                    var workerLockFile = lock + '.worker' + i;

                    // ワーカーロックファイル生成
                    fs.writeFileSync(workerLockFile, child.pid.toString());

                    var socket = new net.Stream(fds[1], 'unix');

                    socket.write(NX.JSON.encode(worder), 'utf8', serverSocket);
                }

            } else {

                // HTTPサーバー生成
                var httpServer = http.createServer(function(req, res) {
                    (function(){
                        (new NX.Dispatcher()).dispatch(
                            NX.apply(me.parseRequest(req), {
                                req: req,
                                res: res,
                                config: {
                                    session: session
                                }
                            }
                        ));
                    })();
                });

                // リスン開始
                httpServer.listen(port, host);

            }

            if(ssl) {

                // 証明書取得
                var key = fs.readFileSync(ssl.key);
                var cert = fs.readFileSync(ssl.cert);

                // HTTPSサーバー生成
                var httpsServer = https.createServer({ key: key, cert: cert }, function(req, res) {
                    (function(){
                        (new NX.Dispatcher()).dispatch(
                            NX.apply(me.parseRequest(req), {
                                req: req,
                                res: res,
                                config: {
                                    session: session
                                }
                            }
                        ));
                    })();
                });

                // リスン開始
                httpsServer.listen(ssl.port, ssl.host);
            }

        };

        if(enableDaemon) {

            // プロセスのデーモン化
            fs.open(log, 'w+', 0666, function(err, fd) {

                if(err) {
                    return callback(err);
                }

                try {

                    var os = require('os');
                    var osType = os.type();
                    var type = '';

                    if(osType === 'Darwin') {
                        type = 'macos';
                    } else if(osType === 'Linux') {
                        type = 'linux';
                    }


                    var util = require('util'),
                        exec = require('child_process').exec,
                        child;

                    child = exec('getconf LONG_BIT', function (error, stdout, stderr) {

                        if (error !== null) {

                        } else {

                            var bit = '';

                            if(type === 'linux' && stdout == 64) {
                                bit = '_x64';
                            }

                            var NXD = require('../resources/nxd/' + type +'/nxd' + bit);
                            var pid = NXD.start(fd);

                            NXD.lock(lock);

                            callback(null, pid);

                        }
                    });

                } catch(e) {

                    callback(e);

                }

            });

        } else {

            callback(null, process.pid);

        }

    },

    // }}}
    // {{{ stop

    stop: function() {

        var me = this,
            fs = require('fs'),
            path = require('path'),
            lock = me.config.lockFile;

        // ワーカーロックファイルからpidを取得してプロセスを終了
        var files = fs.readdirSync(path.dirname(lock));
        var ln = files.length;

        for(var i = 0; i < ln; i++) {

            var filename = path.basename(lock) + '.worker' + i;

            if(NX.Array.contains(files, filename)) {

                var filepath = path.dirname(lock) + '/' + filename;
                var pid = parseInt(fs.readFileSync(filepath).toString());
                process.kill(pid);

                fs.unlinkSync(filepath);
            }
        }

        var callback = function(err, pid) {

            if(err) {
                return console.log('Error stopping daemon: ' + err);
            }

            console.log('Successfully stopped daemon with pid: ' + pid);

        };

        fs.readFile(lock, function (err, data) {

            if(err) {
                return callback(err);
            }

            try {

                var pid = parseInt(data.toString());
                process.kill(pid);

                fs.unlink(lock, function (err) {

                    if(err) {
                        return callback(err);
                    }

                    callback(null, pid);

                });

            } catch(e) {

                callback(e);

            }

        });

    }

    // }}}

}, function() {

    NX.server = NX.Function.alias(NX.server.Server, 'boot');

});

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
