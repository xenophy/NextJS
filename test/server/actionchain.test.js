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
    helpers = require('../helpers');

// }}}
// {{{ controller Tests

var srv = NX.createServer({
    servers: [{
        port: process.NXEnv.testport,
        path: __dirname + '/actionchain/'
    }]
});

srv.listen();

module.exports = {

    // {{{ test actionchain#index

    'test actionchain#index': function(beforeExit) {

        var file;

        file = fs.readFileSync(__dirname + '/actionchain/public_html/index.result.html');
        srv.servers[0].server.assertResponse('GET', '/', 200, file);
    },

    // }}}
    // {{{ test actionchain#index2

    'test actionchain#index2': function(beforeExit) {

        var file;

        file = fs.readFileSync(__dirname + '/actionchain/public_html/index2.result.html');
        srv.servers[0].server.assertResponse('GET', '/index2.html', 200, file);
    },

    // }}}
    // {{{ test actionchain#index3

    'test actionchain#index3': function(beforeExit) {

        var file;

        file = fs.readFileSync(__dirname + '/actionchain/public_html/index3.result.html');
        srv.servers[0].server.assertResponse('GET', '/index3.html', 200, file);
    },

    // }}}
    // {{{ test actionchain#index4

    'test actionchain#index4': function(beforeExit) {

        var file;

        srv.servers[0].server.assertResponse('GET', '/index4.html', 500);
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
