/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ require

var netBinding = process.binding('net');
var spawn = require('child_process').spawn;
var net = require('net');

// }}}
// {{{ NX.server.Server.start

module.exports = function(config) {

    config = config || {};

    if(!config.ssl) {
        config.ssl = {};
    }

    NX.applyIf(config, {
        port: 3000,
        useSSL: false,
        workers: require('os').cpus().length
    });

    NX.applyIf(config.ssl, {
        port: 443
    });

    var serverSocket = netBinding.socket('tcp4');

    netBinding.bind(serverSocket, config.port);
    netBinding.listen(serverSocket, 128);

    for(var i = 0; i < config.workers; i++) {

        var fds = netBinding.socketpair();
        var child = spawn(process.argv[0], [require('path').normalize(__dirname + '/../Worker.js')], {
            customFds: [fds[0], 1, 2]
        });
        var socket = new net.Stream(fds[1], 'unix');

        socket.write('nxstart', 'utf8', serverSocket);
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
