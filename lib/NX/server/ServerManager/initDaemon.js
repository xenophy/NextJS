/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ require

var sys = require('sys');

// }}}
// {{{ private

var start = function() {

    var me = this;

    // 登録サーバー生成
    me.createServers();

    /*
    // デーモン初期化
    NX.server.Daemon.init(me.getLogFile(), me.getLockFile(), function(err, started) {

        if(err) {
            console.dir(err.stack);
            return sys.puts('Error starting daemon: ' + err);
        }

        sys.puts('Successfully started daemon');
    });
    */
};


var stop = function() {

    var me = this;

    NX.server.Daemon.kill(me.getLockFile(), function (err, pid) {

        if(err) {
            return sys.puts('Error stopping daemon: ' + err);
        }

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
