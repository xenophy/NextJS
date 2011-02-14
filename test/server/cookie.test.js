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

var testName = 'cookie';
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

    // {{{ test cookie#setCookie

    'test cookie#setCookie': function(beforeExit) {

        var req = {
            url: '/',
            method: 'GET'
        };
        var res = {
            status: 200
        }
        var cb = function(res) {
            assert.ok(res);
            cookies = res.headers['set-cookie'];
            assert.ok(NX.inArray('param1=kotsutsumi; expires=Sun, 15 May 2011 15:00:00 GMT; path=/; domain=127.0.0.1; secure; httpOnly', cookies));
        };

        assert.response(server, req, res, cb);
    },

    // }}}
    // {{{ test cookie#getCookie

    'test cookie#getCookie': function(beforeExit) {

        var file = fs.readFileSync(docRoot + '/public_html/index.result.html').toString();

        var cookie = '';
        var cookies = [{
            param1:'kotsutsumi'
        }];
        cookies.forEach(function(item, i) {
            if(i>0) {
                cookie += '; ';
            }
            NX.iterate(item, function(key, v) {
                cookie += key + '=' + v;
            });
        });

        var req = {
            url: '/',
            headers: {
                Cookie: cookie
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
