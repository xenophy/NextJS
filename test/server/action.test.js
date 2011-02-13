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

var testName = 'action';
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

    // {{{ test action#index

    'test action#index': function(beforeExit) {

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
    // {{{ test action#mod

    'test action#mod': function(beforeExit) {

        var file = fs.readFileSync(docRoot + '/public_html/mod.result.html').toString();
        var req = {
            url: '/mod.html',
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
    // {{{ test action#ua

    'test action#ua': function(beforeExit) {

        var ua = 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_3; en-US) AppleWebKit/533.4 (KHTML, like Gecko) Chrome/5.0.375.55 Safari/533.4';
        var file = fs.readFileSync(docRoot + '/public_html/ua.result.html').toString();

        var req = {
            url: '/ua.html',
            headers: {
                'User-Agent' : ua
            },
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
    // {{{ test action#ua2

    'test action#ua2': function(beforeExit) {

        var ua = 'Mozilla/5.0 (Linux; U; Android 1.6; ja-jp; SonyEricssonSO-01B Build/XXXXXXX) AppleWebkit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.';
        var file = fs.readFileSync(docRoot + '/public_html/ua2.result.html').toString();

        var req = {
            url: '/ua2.html',
            headers: {
                'User-Agent' : ua
            },
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
    // {{{ test action#ua3

    'test action#ua3': function(beforeExit) {

        var ua = 'Mozilla/5.0 (Linux; U; Android 1.6; ja-jp; SonyEricssonSO-01B Build/XXXXXXX) AppleWebkit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.';

        var req = {
            url: '/ua3.html',
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
