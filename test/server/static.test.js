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
// {{{ static Tests

var srv = NX.createServer({
    servers: [{
        port: process.NXEnv.testport,
        path: __dirname + '/static/'
    }]
});

srv.listen();

module.exports = {

    // {{{ test static#200

    'test static#200': function(beforeExit) {

        var file = fs.readFileSync(__dirname + '/static/public_html/index.html');
        srv.servers[0].server.assertResponse('GET', '/', 200, file);

    },

    // }}}
    // {{{ test static#404

    'test static#404': function(beforeExit) {

        var file = fs.readFileSync(process.NXEnv.libdir + '/config/error/HTTP_NOT_FOUND.html').toString('utf8');
        srv.servers[0].server.assertResponse('GET', '/notfound', 404, file);

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
