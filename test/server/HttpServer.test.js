/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

require('NX');
require('../helper');
var should = require('should');
var fs = require('fs');
var assert = require('assert');
var queryString = require('querystring')
  , crypto = require('crypto')
  , Path = require('path')
  , fs = require('fs');


// }}}
// {{{ NX.server.HttpServer Class Tests

module.exports = {

    // {{{ test createServer#wrong listeners

    'test createServer#wrong listeners': function() {

        try {
            var srv = NX.createServer({
                servers: {}
            });

            srv.listen();
        } catch (e) {
            e.message.should.equal('specify an array of listeners.');
        }

    },

    // }}}
    // {{{ test createServer#wrong port

    'test createServer#wrong port': function() {

        try {
            var srv = NX.createServer({
                servers: [{
                    port: 'string'
                }]
            });

            srv.listen();

        } catch (e) {
            e.message.should.equal('specify an number of port.');
        }

    },

    // }}}
    // {{{ test static#standard

    'test static#standard': function(beforeExit) {

        var srv = NX.createServer({
            servers: [{
                port: process.NXEnv.testport,
                path: __dirname + '/static/'
            }]
        });

        srv.assertResponse({
            server: srv.servers[0],
            method: 'GET',
            path: '/',
            expectedStatus: 200,
            expectedBody: fs.readFileSync(__dirname + '/static/public_html/index.html'),
            msg: 'static'
        });

    },

    // }}}
    // {{{ test static#notfound

    'test static#notfound': function(beforeExit) {

        var srv = NX.createServer({
            servers: [{
                port: process.NXEnv.testport,
                path: __dirname + '/static/'
            }]
        });

        srv.assertResponse({
            server: srv.servers[0],
            method: 'GET',
            path: '/notfoundpath',
            expectedStatus: 404,
            expectedBody: fs.readFileSync(process.NXEnv.libdir + '/config/error/HTTP_NOT_FOUND.html'),
            msg: '404 Error'
        });

    },

    // }}}
    // {{{ test controller#standard

    'test controller#standard': function(beforeExit) {

        var srv = NX.createServer({
            servers: [{
                port: process.NXEnv.testport,
                path: __dirname + '/controller/'
            }]
        });

        srv.assertResponse({
            server: srv.servers[0],
            method: 'GET',
            path: '/',
            expectedStatus: 200,
            expectedBody: fs.readFileSync(__dirname + '/controller/public_html/index.result.html'),
            msg: 'controller#/'
        });

        srv.assertResponse({
            server: srv.servers[0],
            method: 'GET',
            path: '/users/',
            expectedStatus: 200,
            expectedBody: fs.readFileSync(__dirname + '/controller/public_html/users/index.result.html'),
            msg: 'controller#/users/'
        });

        srv.assertResponse({
            server: srv.servers[0],
            method: 'GET',
            path: '/users/index.html',
            expectedStatus: 200,
            expectedBody: fs.readFileSync(__dirname + '/controller/public_html/users/index.result.html'),
            msg: 'controller#/users/index.html'
        });

        srv.assertResponse({
            server: srv.servers[0],
            method: 'GET',
            path: '/users/info/',
            expectedStatus: 200,
            expectedBody: fs.readFileSync(__dirname + '/controller/public_html/users/info/index.result.html'),
            msg: 'controller#/users/info/'
        });

        srv.assertResponse({
            server: srv.servers[0],
            method: 'GET',
            path: '/users/info/index.html',
            expectedStatus: 200,
            expectedBody: fs.readFileSync(__dirname + '/controller/public_html/users/info/index.result.html'),
            msg: 'controller#/users/info/index.html'
        });

    },

    // }}}
    // {{{ test db#standard

    'test db#standard': function(beforeExit) {

        var srv = NX.createServer({
            servers: [{
                port: process.NXEnv.testport,
                path: __dirname + '/db/'
            }]
        });

        srv.assertResponse({
            server: srv.servers[0],
            method: 'GET',
            path: '/',
            expectedStatus: 200,
            expectedBody: fs.readFileSync(__dirname + '/db/public_html/index.result.html'),
            msg: 'db#/'
        });

    },

    // }}}
    // {{{ test module#standard

    'test module#standard': function(beforeExit) {

        var srv = NX.createServer({
            servers: [{
                port: process.NXEnv.testport,
                path: __dirname + '/module/'
            }]
        });

        srv.assertResponse({
            server: srv.servers[0],
            method: 'GET',
            path: '/',
            expectedStatus: 200,
            expectedBody: fs.readFileSync(__dirname + '/module/public_html/index.result.html'),
            msg: 'module#/'
        });

    },

    // }}}
    // {{{ test request#standard

    'test request#standard': function(beforeExit) {

        var srv = NX.createServer({
            servers: [{
                port: process.NXEnv.testport,
                path: __dirname + '/request/'
            }]
        });

        srv.assertResponse({
            server: srv.servers[0],
            method: 'GET',
            path: '/',
            expectedStatus: 200,
            expectedBody: fs.readFileSync(__dirname + '/request/public_html/index.result.html'),
            msg: 'request#/'
        });

        srv.assertResponse({
            server: srv.servers[0],
            method: 'GET',
            path: '/?person=urlrequest',
            expectedStatus: 200,
            expectedBody: fs.readFileSync(__dirname + '/request/public_html/index.result2.html'),
            msg: 'request#/?person=urlrequest'
        });

        var post_data = NX.encode({person: 'kotsutsumi'});
        srv.assertResponse({
            server: srv.servers[0],
            method: 'POST',
            path: '/',
            data: post_data,
            expectedStatus: 200,
            expectedBody: fs.readFileSync(__dirname + '/request/public_html/index.result3.html'),
            msg: "request#/?{person: 'kotsutsumi'}"
        });

    },

    // }}}
    // {{{ test session#standard

    'test session#standard': function(beforeExit) {

        var srv = NX.createServer({
            servers: [{
                port: process.NXEnv.testport,
                path: __dirname + '/session/'
            }]
        });

        var cookie = {};

        srv.assertResponse({
            server: srv.servers[0],
            method: 'GET',
            path: '/',
            expectedStatus: 200,
            expectedBody: fs.readFileSync(__dirname + '/session/public_html/index.result.html'),
            msg: 'session#/'
        });

        srv.assertResponse({
            server: srv.servers[0],
            method: 'POST',
            data: NX.encode({person: 'kotsutsumi'}),
            path: '/',
            expectedStatus: 200,
            expectedBody: fs.readFileSync(__dirname + '/session/public_html/index.result2.html'),
            msg: "session#/?{person: 'kotsutsumi'}",
            fn: function(req, res) {

                var sessionId;
                NX.each(res.headers['set-cookie'], function(item) {
                    var tmp = NX.explode(' ', item);
                    tmp = NX.explode('=', tmp[0]);

                    var name = tmp[0];
                    var value = tmp[1].substr(0, tmp[1].length-1);

                    if(name == 'nextjs.sid') {
                        sessionId = value;
                    }
                });

                var store = srv.servers[0].sessionStore;

                store.get(sessionId, function(err, v) {

                    assert.equal(v.person, 'kotsutsumi');
                
                });

            }
        });

        srv.assertResponse({
            server: srv.servers[0],
            method: 'GET',
            path: '/clear',
            expectedStatus: 302,
            msg: 'session#/clear'
        });

        srv.assertResponse({
            server: srv.servers[0],
            method: 'GET',
            path: '/',
            expectedStatus: 200,
            expectedBody: fs.readFileSync(__dirname + '/session/public_html/index.result.html'),
            msg: 'session#/'
        });

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
