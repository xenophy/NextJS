/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.server.Server.start

module.exports = function() {

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

        // デーモン化完了
        if(err) {
            console.dir(err.stack);
            return console.log('Error starting daemon: ' + err);
        }

        // セッションファイルクリーンアップ
        NX.Fs.readdir('/tmp/', function(err, files) {

            var key = port + '.' + session.key;
            var len = key.length;
            var list = [];

            files.forEach(function(file) {

                if(file.substr(file.length-len) === key) {
                    list.push(file);
                }

            });

            if(list.length === 0) {
                list.push('none');
            }

            list.forEach(function(file, cnt) {

                var fn = function() {};

                if(list.length - 1 === cnt) {

                    fn = function() {

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
                                        require('path').normalize(__dirname + '/../Worker.js')
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

                            // ミドルウェア定義
                            var middleware = [
                                NX.server.Server.bodyParser(),
                                NX.server.Server.cookieParser(),
                                NX.server.Server.sessionProvider(me.config.session),
                                NX.server.Server.requestParser(me.config),
                                NX.Dispatcher.dispatch()
                            ];

                            // HTTPサーバー生成
                            (new NX.server.Http(middleware)).listen(port, host);

                        }

                        if(ssl) {

                            // 証明書取得
                            var key = fs.readFileSync(ssl.key);
                            var cert = fs.readFileSync(ssl.cert);

                            // HTTPSサーバー生成
                            (new NX.server.Https(middleware,{
                                key: key,
                                cert: cert
                            })).listen(ssl.port, ssl.host);
                        }

                    };

                }

                if(file !== 'none') {
                    NX.Fs.unlink('/tmp/' + file, fn);
                } else {
                    fn();
                }

            });

        });

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

                        var NXD = require('../../resources/nxd/' + type +'/nxd' + bit);
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

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
