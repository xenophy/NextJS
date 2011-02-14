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

var testName = 'template';
var docRoot = __dirname + '/' + testName;

// }}}
// {{{ server

var srv = NX.createServer({
    servers: [{
        port: process.NXEnv.testport,
        path: docRoot
    }]
});

var server = srv.servers[0].server;

module.exports = {

    // {{{ test simple#standerd

    'test simple#standerd': function(beforeExit) {

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
    // {{{ test if#standerd

    'test if#standerd': function(beforeExit) {

        var file = fs.readFileSync(docRoot + '/public_html/if.result.html').toString();
        var req = {
            url: '/if.html',
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
    // {{{ test ifelse#standerd

    'test ifelse#standerd': function(beforeExit) {

        var file = fs.readFileSync(__dirname + '/template/public_html/ifelse.result.html').toString();
        var req = {
            url: '/ifelse.html',
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
    // {{{ test elseif#standerd

    'test elseif#standerd': function(beforeExit) {

        var file = fs.readFileSync(docRoot + '/public_html/elseif.result.html').toString();
        var req = {
            url: '/elseif.html',
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
    // {{{ test include#standerd

    'test include#standerd': function(beforeExit) {

        var file = fs.readFileSync(docRoot + '/public_html/include.result.html').toString();
        var req = {
            url: '/include.html',
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
    // {{{ test modifier#standerd

    'test modifier#standerd': function(beforeExit) {

        var file = fs.readFileSync(docRoot + '/public_html/modifier.result.html').toString();
        var req = {
            url: '/modifier.html',
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
    // {{{ test literal#standerd

    'test literal#standerd': function(beforeExit) {

        var file = fs.readFileSync(docRoot + '/public_html/literal.result.html').toString();
        var req = {
            url: '/literal.html',
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
