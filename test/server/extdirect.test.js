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

var testName = 'extdirect';
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

var LF = String.fromCharCode(10);
var CR = String.fromCharCode(13);

module.exports = {

    // {{{ test extdirect#remotingapi

    'test extdirect#remotingapi': function(beforeExit) {

        var file = 'Ext.app.REMOTING_API = {"url":"/remotingapi","type":"remoting","actions":{"users":[{"name":"getList","len":0},{"name":"getGridList","len":5},{"name":"getNode","len":1},{"name":"readForm","len":1},{"name":"writeForm","len":1,"formHandler":true}],"other":[{"name":"getOther","len":0}]}};';
        var req = {
            url: '/remotingapi',
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
    // {{{ test extdirect#users/remotingapi

    'test extdirect#users/remotingapi': function(beforeExit) {

        var file = 'Ext.app.REMOTING_API = {"url":"/users/remotingapi","type":"remoting","actions":{"users":[{"name":"getList","len":0},{"name":"getGridList","len":5},{"name":"getNode","len":1},{"name":"readForm","len":1},{"name":"writeForm","len":1,"formHandler":true}]}};';
        var req = {
            url: '/users/remotingapi',
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
    // {{{ test extdirect#foo/remotingapi

    'test extdirect#foo/remotingapi': function(beforeExit) {

        var req = {
            url: '/foo/remotingapi',
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
    // {{{ test extdirect#/remotingapi:users

    'test extdirect#foo/remotingapi:users': function(beforeExit) {

        var file = '{"type":"rpc","tid":2,"action":"users","method":"getList","result":[{"id":0,"name":"kotsutsumi"},{"id":1,"name":"jack"},{"id":2,"name":"mark"}],"status":true}';
        var data = {"action":"users","method":"getList","data":null,"type":"rpc","tid":2};
        data = NX.encode(data);
        var req = {
            url: '/remotingapi',
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
        };

        assert.response(server, req, res, cb);
    },

    // }}}
    // {{{ test extdirect#/remotingapi:upload

    'test extdirect#foo/remotingapi:upload': function(beforeExit) {

        var image = fs.readFileSync(__dirname + '/../shared/AuroraRed.jpg');
        var boundary = 'NextJSBounday';

        var data = [
            '--' + boundary,
            'Content-Disposition: form-data; name="photo"; filename="AuroraRed.jpg"',
            'Content-Type: image/jpeg',
            '',
            image.toString('base64'),
            '--' + boundary,
            'Content-Disposition: form-data; name="dummyData"',
            '',
            '2',
            '--' + boundary,
            'Content-Disposition: form-data; name="extTID"',
            '',
            '2',
            '--' + boundary,
            'Content-Disposition: form-data; name="extAction"',
            '',
            'users',
            '--' + boundary,
            'Content-Disposition: form-data; name="extMethod"',
            '',
            'writeForm',
            '--' + boundary,
            'Content-Disposition: form-data; name="extType"',
            '',
            'rpc',
            '--' + boundary,
            'Content-Disposition: form-data; name="extUpload"',
            '',
            'true',
            '--' + boundary + '--'
        ].join(CR + LF);

        var req = {
            url: '/remotingapi',
            method: 'POST',
            headers : {
                'Content-Type': 'multipart/form-data; boundary=' + boundary,
                'Content-Length': data.length
            },
            data: data
        };
        var res = {
            //body: file,
            status: 200
        }
        var cb = function(res) {
            assert.ok(res);

            fs.unlinkSync(__dirname + '/extdirect/public_html/photo/AuroraRed.jpg');
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
