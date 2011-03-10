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

var config = {
  lockFile: '/tmp/nxd.pid',
  logFile: '/tmp/nxd.log'
};

// }}}
// {{{ NX.server.ServerManager

/**
 * @class NX.server.ServerManager
 */
NX.define('NX.server.ServerManager', {

    // {{{ extend

    /**
     * @prop extend
     */
    extend: 'NX.AbstractManager',

    // }}}
    // {{{ singleton

    /**
     * @prop singleton
     */
    singleton: true,

    // }}}
    // {{{ initReg

    initReg: false,

    // }}}
    // {{{ initDaemon

    /**
     * @method initDaemon
     * @private
     */
    initDaemon : function() {

        var args = process.argv;
        var op = (args[2] || "").toLowerCase();

        switch(op) {

            case 'start':

                var http = require('http');

                http.createServer(function(req, res) {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.write('<h1>Hello, World!</h1>');
                    res.end();
                }).listen(8000);

                NX.server.Daemon.init(config.logFile, config.lockFile, function(err, started) {

                    if(err) {
                        console.dir(err.stack);
                        return sys.puts('Error starting daemon: ' + err);
                    }

                    sys.puts('Successfully started daemon');
                });

            break;

            case 'stop':

                NX.server.Daemon.kill(config.lockFile, function (err, pid) {

                    if(err) {
                        return sys.puts('Error stopping daemon: ' + err);
                    }

                    sys.puts('Successfully stopped daemon with pid: ' + pid);

                });

            break;

            case 'restart':

                NX.server.Daemon.kill(config.lockFile, function (err, pid) {

                    if(err) {
                        return;
                    }

                    var http = require('http');

                    http.createServer(function(req, res) {
                        res.writeHead(200, { 'Content-Type': 'text/html' });
                        res.write('<h1>Hello, World!</h1>');
                        res.end();
                    }).listen(8000);

                    NX.server.Daemon.init(config.logFile, config.lockFile, function(err, started) {

                        if(err) {
                            console.dir(err.stack);
                            return sys.puts('Error starting daemon: ' + err);
                        }

                        sys.puts('Successfully started daemon');
                    });

                });

            break;

            default:
                sys.puts('Usage: [start|restart|stop]');
            break;

        };

    },

    // }}}
    // {{{ constructor

    /**
     * @method constructor
     */
    constructor :function() {

        this.callParent();

    },

    // }}}
    // {{{ register

    /**
     * @method register
     */
    register: function(name, options) {

        var me = this;


        if(NX.isObject(name)) {
            options = name;
        } else {
            options.name = name;
        }

        var server = new NX.Server(options);

        this.all.add(server);

        if(!me.initReg) {
            me.initReg = true;
            me.initDaemon();
        }

        return server;
    }

    // }}}

}, function() {

    // {{{ regServer

    /**
     * @method regServer
     */
    NX.regServer = function() {
        return NX.server.ServerManager.register.apply(NX.server.ServerManager, arguments);
    };

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
