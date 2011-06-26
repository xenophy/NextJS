/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ require

require('../../NX');

// }}}
// {{{ NX.server.Worker

NX.define('NX.server.Worker', {

    // {{{ singleton

    singleton: true,

    // }}}
    // {{{ extend

    extend: 'NX.server.AbstractServer',

    // }}}
    // {{{ config

    config: {},

    // }}}
    // {{{ init

    init: function(config) {

        config = config || {};

        NX.applyIf(this.config, config);

    },

    // }}}
    // {{{ startServer

    startServer: function(fd) {

        var me = this;

        http.createServer(function (req, res) {
            (function(){
                (new NX.Dispatcher()).dispatch(NX.apply(me.parseRequest(req), { req: req, res: res }));
            })();
        }).listenFD(fd);

        console.log('Worker Ready: ' + process.pid);

    },

    // }}}
    // {{{ start

    start: function() {

        var server = this,
            net = require('net');
            http = require('http');
            socket = new net.Socket(0, 'unix');

        socket.on('data', function(data) {

            var order = NX.JSON.decode(data.toString());
            var type = order.type;

            if(NX.isFunction(server[type])) {
                server[type].call(server, order.config);
            }

        });

        socket.on('fd', function(fd) {
            server.startServer.call(server, fd);
        }).resume();

    }

    // }}}

}, function() {

    NX.server.Worker.start();

});

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
