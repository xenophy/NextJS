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

var testName = 'actionchain';
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

    // {{{ test actionchain#index

    'test actionchain#index': function(beforeExit) {

        var file = fs.readFileSync(docRoot + '/public_html/index.result.html').toString();
        var req = {
            url: '/',
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
    // {{{ test actionchain#index2

    'test actionchain#index2': function(beforeExit) {

        var file = fs.readFileSync(docRoot + '/public_html/index2.result.html').toString();
        var req = {
            url: '/index2.html',
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
    // {{{ test actionchain#index3

    'test actionchain#index3': function(beforeExit) {

        var file = fs.readFileSync(__dirname + '/actionchain/public_html/index3.result.html').toString();
        var req = {
            url: '/index3.html',
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
    // {{{ test actionchain#index4

    'test actionchain#index4': function(beforeExit) {

        var req = {
            url: '/index4.html',
            method: 'GET'
        };
        var res = {
            status: 500
        }
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
