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

var testName = 'exception';
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

    // {{{ test exception#standerd

    'test controller#standerd': function(beforeExit) {

        var req = {
            url: '/',
            headers : {
                accept: 'text/html'
            },
            method: 'GET'
        };
        var res = {
            status: 500
        }
        var cb = function(res) {
            assert.ok(res);
        };

        assert.response(server, req, res, cb);
    },

    // }}}
    // {{{ test exception#json

    'test exception#json': function(beforeExit) {

        var req = {
            url: '/',
            headers : {
                accept: 'application/json'
            },
            method: 'GET'
        };
        var res = {
            status: 500
        }
        var cb = function(res) {
            assert.ok(res);
        };

        assert.response(server, req, res, cb);
    },

    // }}}
    // {{{ test exception#unknown

    'test exception#unknown': function(beforeExit) {

        var req = {
            url: '/',
            headers : {
                accept: 'xxxxx'
            },
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