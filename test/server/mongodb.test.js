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
    fs = require('fs');

// }}}
// {{{ Test Name

var testName = 'mongodb';
var docRoot = __dirname + '/' + testName;

// }}}
// {{{ mongodb Tests

var srv = NX.createServer({
    servers: [{
        port: process.NXEnv.testport,
        path: docRoot
    }]
});

var server = srv.servers[0].server;

module.exports = {

    // {{{ test mongodb#mod1

    'test mongodb#mod1': function(beforeExit) {

        var file = fs.readFileSync(docRoot + '/public_html/mod1.result.html').toString();
        var req = {
            url: '/mod1.html',
            method: 'GET'
        };
        var res = {
            body: file,
            status: 200
        }
        var cb = function(res) {
            assert.ok(res);
        };

        assert.response(server, req, res, cb);
    },

    // }}}
    // {{{ test mongodb#mod2

    'test mongodb#mod2': function(beforeExit) {

        var req = {
            url: '/mod2.html',
            status: 500,
            method: 'GET'
        };
        var res = {
        };
        var cb = function(res) {
            assert.ok(res);
        };

        assert.response(server, req, res, cb);
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
