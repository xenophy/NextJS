/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

require('NX');
require('../../helper');
var should = require('should');
var fs = require('fs');

// }}}
// {{{ NX.server.HttpServer Class Tests

module.exports = {

    // {{{ test createServer#standard

    'test createServer#standard': function() {

        var srv = NX.createServer({
            servers: [{
                port: process.NXEnv.testport,
                path: __dirname
            }]
        });

        srv.assertResponse({
            server: srv.servers[0],
            method: 'GET',
            path: '/',
            expectedStatus: 200,
            expectedBody: fs.readFileSync(__dirname + '/public_html/index.result.html'),
            msg: 'ctrl1'
        });



        /*
        srv.assertResponse(srv.servers[0], 'GET', '/users/', 200, fs.readFileSync(__dirname + '/public_html/users/index.result.html'), 'ctrl2');
        srv.assertResponse(srv.servers[0], 'GET', '/users/index.html', 200, fs.readFileSync(__dirname + '/public_html/users/index.result.html'), 'ctrl3');
        srv.assertResponse(srv.servers[0], 'GET', '/users/info/', 200, fs.readFileSync(__dirname + '/public_html/users/info/index.result.html'), 'ctrl4');
        srv.assertResponse(srv.servers[0], 'GET', '/users/info/index.html', 200, fs.readFileSync(__dirname + '/public_html/users/info/index.result.html'), 'ctrl5');
        */
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
