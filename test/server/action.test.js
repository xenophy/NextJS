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
        path: __dirname + '/action/'
    }]
});

srv.listen();

module.exports = {

    // {{{ test action#index

    'test action#index': function(beforeExit) {

        var file;

        file = fs.readFileSync(__dirname + '/action/public_html/index.result.html');
        srv.servers[0].server.assertResponse('GET', '/', 200, file);
    },

    // }}}
    // {{{ test action#mod

    'test action#mod': function(beforeExit) {

        var file;

        file = fs.readFileSync(__dirname + '/action/public_html/mod.result.html');
        srv.servers[0].server.assertResponse('GET', '/mod.html', 200, file);
    },

    // }}}
    // {{{ test action#ua

    'test action#ua': function(beforeExit) {

        var file;
        var ua = 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_3; en-US) AppleWebKit/533.4 (KHTML, like Gecko) Chrome/5.0.375.55 Safari/533.4';

        file = fs.readFileSync(__dirname + '/action/public_html/ua.result.html');
        srv.servers[0].server.assertResponse('GET', {
            path:'/ua.html',
            ua: ua
        }, 200, file);
    },

    // }}}
    // {{{ test action#ua2

    'test action#ua2': function(beforeExit) {

        var file;
        var ua = 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_3; en-US) AppleWebKit/533.4 (KHTML, like Gecko) Chrome/5.0.375.55 Safari/533.4';

        srv.servers[0].server.assertResponse('GET', {
            path:'/ua2.html',
            ua: ua
        }, 500);
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
