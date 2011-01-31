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
// {{{ cookie Tests

var srv = NX.createServer({
    servers: [{
        port: process.NXEnv.testport,
        path: __dirname + '/cookie/'
    }]
});

srv.listen();

module.exports = {

    // {{{ test cookie#setCookie

    'test cookie#setCookie': function(beforeExit) {

        var file;

        srv.servers[0].server.assertResponse('GET', '/', 200, undefined, undefined, function(res) {
            cookies = res.headers['set-cookie'];
            assert.ok(NX.inArray('param1=kotsutsumi; expires=Sun, 15 May 2011 15:00:00 GMT; path=/; domain=127.0.0.1; secure; httpOnly', cookies));
        });

    },

    // }}}
    // {{{ test cookie#getCookie

    'test cookie#getCookie': function(beforeExit) {

        var file;
        file = fs.readFileSync(__dirname + '/cookie/public_html/index.result.html');
        srv.servers[0].server.assertResponse('GET', {path: '/', cookies: [{param1:'kotsutsumi'}]}, 200, file);

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
