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

        process.NXEnv.dirname = __dirname;

        var srv = NX.createServer({
            servers: [{
                port: process.NXEnv.testport++
            }]
        });

        srv.assertResponse(srv.servers[0], 'GET', '/', 200, fs.readFileSync(__dirname + '/public_html/index.html'), 'static');

        var html = fs.readFileSync(process.NXEnv.libdir + '/config/error/HTTP_NOT_FOUND.html');
        srv.assertResponse(srv.servers[0], 'GET', '/notfound', 404, html.toString('utf8'), '404 Error');
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
