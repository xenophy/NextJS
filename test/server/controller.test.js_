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
        path: __dirname + '/controller/'
    }]
});

srv.listen();

module.exports = {

    // {{{ test controller#standerd

    'test controller#standerd': function(beforeExit) {

        var file;

        file = fs.readFileSync(__dirname + '/controller/public_html/index.result.html');
        srv.servers[0].server.assertResponse('GET', '/', 200, file);

        file = fs.readFileSync(__dirname + '/controller/public_html/users/index.result.html');
        srv.servers[0].server.assertResponse('GET', '/users/', 200, file);

        file = fs.readFileSync(__dirname + '/controller/public_html/users/index.result.html');
        srv.servers[0].server.assertResponse('GET', '/users/index.html', 200, file);

        file = fs.readFileSync(__dirname + '/controller/public_html/users/info/index.result.html');
        srv.servers[0].server.assertResponse('GET', '/users/info/', 200, file);

        file = fs.readFileSync(__dirname + '/controller/public_html/users/info/index.result.html');
        srv.servers[0].server.assertResponse('GET', '/users/info/index.html', 200, file);

    },

    // }}}
    // {{{ test controller#changetpl

    'test controller#changetpl': function(beforeExit) {

        var file;

        file = fs.readFileSync(__dirname + '/controller/public_html/settpl.result.html');
        srv.servers[0].server.assertResponse('GET', '/changetpl', 200, file);
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
