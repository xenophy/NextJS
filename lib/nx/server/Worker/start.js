/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.server.Worker.start

module.exports = function() {

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

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
