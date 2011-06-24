/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.server.Server

NX.define('NX.server.Server', {

    // {{{ singleton

    singleton: true,

    // }}}

    //    port: 3000,
    //    useSSL: false,
    //    workers: 1,//require('os').cpus().length,

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
            op = (args[2] || "").toLowerCase();

        NX.applyIf(config, {
            port: 3000,
            useSSL: false,
            workers: require('os').cpus().length,
            backlog: 128,
            lockFile: '/tmp/nxd.pid',
            logFile: '/tmp/nxd.log'
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
            NXD = require('../../../build/default/nxd'),
            netBinding = process.binding('net'),
            spawn = require('child_process').spawn,
            net = require('net'),
            serverSocket = netBinding.socket('tcp4'),
            port = me.config.port,
            log = me.config.logFile,
            lock = me.config.lockFile;
            backlog = me.config.backlog;
            workers = me.config.workers;

        var callback = function(err, pid) {

            if(err) {
                console.dir(err.stack);
                return console.log('Error starting daemon: ' + err);
            }

            // デーモン化完了
            netBinding.bind(serverSocket, port);
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
                socket.write('hi', 'utf8', serverSocket);
            }

        };

        // プロセスのデーモン化
        fs.open(log, 'w+', 0666, function(err, fd) {

            if(err) {
                return callback(err);
            }

            try {

                var pid = NXD.start(fd);
                NXD.lock(lock);
                callback(null, pid);

            } catch(e) {

                callback(e);

            }

        });

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

    /*
   */



});

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
