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
        path: __dirname + '/scopeaction/'
    }]
});

srv.listen();

module.exports = {

    // {{{ test scopeaction#index

    'test scopeaction#index': function(beforeExit) {

        var file;

        file = fs.readFileSync(__dirname + '/scopeaction/public_html/index.result.html');
        srv.servers[0].server.assertResponse('GET', '/', 200, file);
    },

    // }}}
    // {{{ test scopeaction#subdir1/index

    'test scopeaction#subdir1/index': function(beforeExit) {

        var file;

        file = fs.readFileSync(__dirname + '/scopeaction/public_html/subdir1/index.result.html');
        srv.servers[0].server.assertResponse('GET', '/subdir1/', 200, file);
    },

    // }}}
    // {{{ test scopeaction#subdir1/override/index

    'test scopeaction#subdir1/override/index': function(beforeExit) {

        var file;

        file = fs.readFileSync(__dirname + '/scopeaction/public_html/subdir1/override/index.result.html');
        srv.servers[0].server.assertResponse('GET', '/subdir1/override/', 200, file);
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
