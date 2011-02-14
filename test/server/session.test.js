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

var testName = 'session';
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
var setCookie;

module.exports = {

    // {{{ test session#standerd

    'test session#standerd': function(beforeExit) {

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
    // {{{ test session#standerd2

    'test session#standerd2': function(beforeExit) {

        var file = fs.readFileSync(__dirname + '/session/public_html/index.result2.html').toString();
        var data = {person: 'kotsutsumi'};
        data = NX.encode(data);
        var req = {
            url: '/',
            method: 'POST',
            headers : {
                'Content-Type' : 'application/json',
                'Content-Length': data.length
            },
            data: data
        };
        var res = {
            body: file,
            status: 200
        }
        var cb = function(res) {
            assert.ok(res);
            setCookie = res.headers['set-cookie'] || [];
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
