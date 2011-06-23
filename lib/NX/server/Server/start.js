/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */



var netBinding = process.binding('net');
var spawn = require('child_process').spawn;
var net = require('net');
 
/*
var serverSocket = netBinding.socket('tcp4');
netBinding.bind(serverSocket, 3000);
netBinding.listen(serverSocket, 128);
 
for (var i = 0; i < 2; i++) {
  var fds = netBinding.socketpair();
  var child = spawn(process.argv[0], [require('path').normalize(__dirname + '/../Worker.js')], {
    customFds: [fds[0], 1, 2]
  });
  var socket = new net.Stream(fds[1], 'unix');
  socket.write('hi', 'utf8', serverSocket);
}
 
return;



*/

// {{{ require

var netBinding = process.binding('net');
var spawn = require('child_process').spawn;
var net = require('net');
var NXD = require('../../../../build/default/nxd');

// }}}
// {{{ start

var start = function(out, lock, callback) {

    /*
    require('fs').open(out, 'w+', 0666, function (err, fd) {

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
    */

};

// }}}
// {{{ kill

var kill = function(lock, callback) {

    require('fs').readFile(lock, function (err, data) {

        if(err) {
            return callback(err);
        }

        try {

            var pid = parseInt(data.toString());
            process.kill(pid);

            require('fs').unlink(lock, function (err) {

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
// {{{ NX.server.Server.start

module.exports = function(config) {

    var me = this;
    var args = process.argv;
    var op = (args[2] || "").toLowerCase();

    /*
    config = config || {};

    if(!config.ssl) {
        config.ssl = {};
    }

    NX.applyIf(config, {
        port: 3000,
        useSSL: false,
        workers: 1,//require('os').cpus().length,
        lockFile: '/tmp/nxd.pid',
        logFile: '/tmp/nxd.log'
    });

    NX.applyIf(config.ssl, {
        port: 443
    });


var netBinding = process.binding('net');
var spawn = require('child_process').spawn;
var net = require('net');
 
var serverSocket = netBinding.socket('tcp4');
netBinding.bind(serverSocket, 3000);
netBinding.listen(serverSocket, 128);
 
for (var i = 0; i < 2; i++) {
  var fds = netBinding.socketpair();
  var child = spawn(process.argv[0], [require('path').normalize(__dirname + '/../Worker.js')], {
    customFds: [fds[0], 1, 2]
  });
  var socket = new net.Stream(fds[1], 'unix');
  socket.write('hi', 'utf8', serverSocket);
}

return;

*/



    switch(op) {

        // {{{ start

        case 'start':

            /*
            start(config.logFile, config.lockFile, function(err, std) {

                if(err) {
                    console.dir(err.stack);
                    return console.log('Error starting daemon: ' + err);
                }

                */
                /*
                var serverSocket = netBinding.socket('tcp4');

                netBinding.bind(serverSocket, config.port);
                netBinding.listen(serverSocket, 128);

                for(var i = 0; i < config.workers; i++) {

                    var fds = netBinding.socketpair();
                    var child = spawn(
                        process.argv[0],
                        [
                            require('path').normalize(__dirname + '/../Worker.js'),
                            config.lockFile
                        ],
                        {
                            customFds: [fds[0], 1, 2]
                        }
                    );
                    var socket = new net.Stream(fds[1], 'unix');

                    socket.write('nxstart' + i, 'utf8', serverSocket);
                }

                console.log('Successfully started daemon');
                /*
            });
            */

            break;

        // }}}
        // {{{ stop

        case 'stop':

            /*
            kill(config.lockFile, function(err, pid) {

                if(err) {
                    return console.log('Error stopping daemon: ' + err);
                }

                console.log('Successfully stopped daemon with pid: ' + pid);

            });
            */

            break;

        // }}}
        // {{{ default

        default:
            console.log('Usage: [start|stop]');
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
