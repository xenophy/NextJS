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
// {{{ session Tests

var srv = NX.createServer({
    servers: [{
        port: process.NXEnv.testport,
        path: __dirname + '/session/'
    }]
});

srv.listen();

module.exports = {

    // {{{ test session#standerd

    'test session#standerd': function(beforeExit) {

        var file;

        file = fs.readFileSync(__dirname + '/session/public_html/index.result.html');
        srv.servers[0].server.assertResponse('GET', '/', 200, file);

        file = fs.readFileSync(__dirname + '/session/public_html/index.result2.html');
        srv.servers[0].server.assertResponse('POST', {path: '/', data: {person: 'kotsutsumi'}}, 200, file, '', function(res) {

            srv.listen();
            file = fs.readFileSync(__dirname + '/session/public_html/index.result2.html');
            srv.servers[0].server.assertResponse('GET', {path :'/', cookies: res.cookies}, 200, file, '', function(res) {

                srv.listen();
                srv.servers[0].server.assertResponse('GET', {path: '/clear', cookies: res.cookies}, 302, undefined, '', function(res) {

                    srv.listen();
                    file = fs.readFileSync(__dirname + '/session/public_html/index.result.html');
                    srv.servers[0].server.assertResponse('GET', '/', 200, file);
                });

            });

        });

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
