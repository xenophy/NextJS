/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ require

var sys = require('sys'),
    path = require('path'),
    fs = require('fs');

// }}}
// {{{ private

var start = function() {

    var me = this;

    // ワーカー判定
    var isWorker = !! process.env.NX_CLUSTER_MASTER_PID;
    var pid = process.pid;

    var logFile = me.getLogFile();
    var lockFile = me.getLockFile();

    if(!isWorker) {

        if(path.existsSync(lockFile)) {
            console.log(lockFile + ' exists, already started.');
            process.kill(pid, 'SIGHUP');
        }

    }

    // 登録サーバー生成
    me.createServers();

    if(!isWorker) {

        fs.unlinkSync(logFile);

        // デーモン初期化
        NX.server.Daemon.init(logFile, lockFile, function(err, started) {

            if(err) {
                console.dir(err.stack);
                return sys.puts('Error starting daemon: ' + err);
            }

            sys.puts('Successfully started daemon');
        });

    } else {

        var data, file = lockFile + '.workers';

        if(path.existsSync(file)) {
            data = fs.readFileSync(file).toString();
        }

        if(!data) {
            data = [];
        } else {
            data = NX.decode(data);
        }

        data.push(pid);

        data = NX.encode(data);

        fs.writeFileSync(file, new Buffer(data));

    }

};

var stop = function() {

    var me = this;

    var logFile = NX.String.format(me.getLogFile(), 'master');
    var lockFile = NX.String.format(me.getLockFile(), 'master');
    var file = lockFile + '.workers';
    var data;

    if(path.existsSync(file)) {
        data = fs.readFileSync(file);
    }

    if(!data) {
        data = [];
    } else {
        data = NX.decode(data);
    }

    data.forEach(function(pid) {
        process.kill(pid, 'SIGHUP');
    });

    fs.unlinkSync(file);

    NX.server.Daemon.kill(lockFile, function (err, pid) {

        if(err) {
            return sys.puts('Error stopping daemon: ' + err);
        }

        NX.server.Daemon.fireEvent('destroy');

        sys.puts('Successfully stopped daemon with pid: ' + pid);

    });

};


var restart = function() {

    var me = this;

    NX.server.Daemon.kill(me.getLockFile(), function (err, pid) {

        if(err) {
            sys.puts('Error stopping daemon: ' + err);
        }

        me.createServers();

        NX.server.Daemon.init(me.getLogFile(), me.getLockFile(), function(err, started) {

            if(err) {
                console.dir(err.stack);
                return sys.puts('Error starting daemon: ' + err);
            }

            sys.puts('Successfully started daemon');
        });

    });

};

// }}}
// {{{ NX.server.ServerManager.initDaemon

var $METHOD = module.exports = function() {

    var me = this;
    var args = process.argv;
    var op = (args[2] || "").toLowerCase();

    switch(op) {

        // {{{ start

        case 'start': start.call(me); break;

        // }}}
        // {{{ stop

        case 'stop': stop.call(me); break;

        // }}}
        // {{{ restart

        case 'restart': restart.call(me); break;

        // }}}
        // {{{ default

        default:
            sys.puts('Usage: [start|restart|stop]');
        break;

        // }}}

    };

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
