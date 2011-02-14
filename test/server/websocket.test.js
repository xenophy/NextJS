/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

require('NX');
var assert = require('assert'),
    http = require('http'),
    fs = require('fs'),
    WebSocket = require('socket.io/support/node-websocket-client/lib/websocket').WebSocket,
    encode = require('socket.io/lib/socket.io/utils').encode,
    decode = require('socket.io/lib/socket.io/utils').decode;

// }}}
// {{{ Test Name

var testName = 'websocket';
var docRoot = __dirname + '/' + testName;

// }}}
// {{{ server

var srv = NX.createServer({
    servers: [{
        websocket: 'app.ws.js',
        port: process.NXEnv.testport,
        path: docRoot
    }]
});

var server = srv.servers[0].server;

function client(server, sessid){
    sessid = sessid ? '/' + sessid : '';
    return new WebSocket('ws://localhost:' + server.port + '/socket.io/websocket' + sessid, 'borf');
};

// }}}

module.exports = {

    // {{{ test websocket#standerd

    'test websocket#standerd': function(beforeExit) {

        var wsc = client(srv.servers[0].server);

        var messages = 0;

        wsc.onopen = function(){
            wsc.send(encode('from client'));
        };

        wsc.onmessage = function(ev){

            if(messages ===1) {
                assert.ok(decode(ev.data), 'from server');
                wsc.close();
                srv.servers[0].server.close();
            }

            messages++;
        };

    }

    // }}}

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
