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
    fs = require('fs'),
    helpers = require('../helpers');

var LF = String.fromCharCode(10);
var CR = String.fromCharCode(13);

// }}}
// {{{ extdirect Tests

var srv = NX.createServer({
    servers: [{
        port: process.NXEnv.testport,
        path: __dirname + '/extdirect/'
    }]
});

srv.listen();

module.exports = {

    // {{{ test extdirect#remotingapi

    'test extdirect#remotingapi': function(beforeExit) {

        var file;
        srv.servers[0].server.assertResponse('GET', {path: '/remotingapi'}, 200, 'Ext.app.REMOTING_API = {"url":"/remotingapi","type":"remoting","actions":{"users":[{"name":"getList","len":0},{"name":"getGridList","len":5},{"name":"getNode","len":1},{"name":"readForm","len":1},{"name":"writeForm","len":1,"formHandler":true}]}};');
        srv.servers[0].server.assertResponse('GET', {path: '/users/remotingapi'}, 200, 'Ext.app.REMOTING_API = {"url":"/users/remotingapi","type":"remoting","actions":{"users":[{"name":"getList","len":0},{"name":"getGridList","len":5},{"name":"getNode","len":1},{"name":"readForm","len":1},{"name":"writeForm","len":1,"formHandler":true}]}};');
        srv.servers[0].server.assertResponse('GET', {path: '/foo/remotingapi', accept: 'application/json'}, 500);

        var file = '{"type":"rpc","tid":2,"action":"users","method":"getList","result":[{"id":0,"name":"kotsutsumi"},{"id":1,"name":"jack"},{"id":2,"name":"mark"}],"status":true}';
        srv.servers[0].server.assertResponse('POST', {path: '/remotingapi', data: {"action":"users","method":"getList","data":null,"type":"rpc","tid":2}}, 200, file, 'direct');


        var image = fs.readFileSync(__dirname + '/../shared/AuroraRed.jpg');
        var boundary = 'NextJSBounday';

        var data = [
            '--' + boundary,
            'Content-Disposition: form-data; name="photo"; filename="AuroraRed.jpg"',
            'Content-Type: image/jpeg',
            '',
            image.toString('base64'),
            //image,
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

        srv.servers[0].server.assertResponse(
            'POST', {
                path: '/remotingapi',
                data: data,
                planedata: true,
                contentType: 'multipart/form-data; boundary=' + boundary
            },
            200, undefined, 'upload', function(res) {

                fs.unlink(__dirname + '/extdirect/public_html/photo/AuroraRed.jpg', function(err) {
                });

        });

    },

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
