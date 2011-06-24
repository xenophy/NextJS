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

    singleton: true,

    // {{{ startServer

    startServer: function(fd) {

        var count = 0;

        http.createServer(function (req, res) {

            console.log(count++);
            res.writeHead(200);
            res.write("count: " + count + "\n");
            res.end('Hello from: ' + process.pid + "\n");

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
            //console.log(data.toString());
            //console.log(arguments);
        });

        socket.on('fd', function(fd) {

            console.log(arguments);


            server.startServer(fd);
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
