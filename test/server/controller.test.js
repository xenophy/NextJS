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

var testName = 'controller';
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

    // {{{ test controller#index.html

    'test controller#index.html': function(beforeExit) {

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
    // {{{ test controller#users/

    'test controller#users/': function(beforeExit) {

        var file = fs.readFileSync(docRoot + '/public_html/users/index.result.html').toString();
        var req = {
            url: '/users/',
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
    // {{{ test controller#users/index.html

    'test controller#users/index.html': function(beforeExit) {

        var file = fs.readFileSync(docRoot + '/public_html/users/index.result.html').toString();
        var req = {
            url: '/users/index.html',
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
    // {{{ test controller#users/info/

    'test controller#users/info/': function(beforeExit) {

        var file = fs.readFileSync(docRoot + '/public_html/users/info/index.result.html').toString();
        var req = {
            url: '/users/info/',
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
    // {{{ test controller#users/info/index.html

    'test controller#users/info/index.html': function(beforeExit) {

        var file = fs.readFileSync(docRoot + '/public_html/users/info/index.result.html').toString();
        var req = {
            url: '/users/info/index.html',
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
    // {{{ test controller#changetpl

    'test controller#changetpl': function(beforeExit) {

        var file = fs.readFileSync(docRoot + '/public_html/settpl.result.html').toString();
        var req = {
            url: '/changetpl',
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
