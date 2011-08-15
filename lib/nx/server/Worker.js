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

    extend: 'NX.server.Abstract',

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

        // ミドルウェア定義
        var middleware = [
            NX.server.Server.bodyParser(),
            NX.server.Server.cookieParser(),
            NX.server.Server.sessionProvider(me.config.session),
            NX.server.Server.requestParser(me.config),
            NX.server.Server.multipartParser(),
            NX.Dispatcher.dispatch()
        ];

        // HTTPサーバー生成
        (new NX.server.Http(middleware)).listenFD(fd);

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
