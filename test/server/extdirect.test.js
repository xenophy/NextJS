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

    // {{{ test extdirect#standerd

    'test extdirect#standerd': function(beforeExit) {

        var file;

        srv.servers[0].server.assertResponse('GET', {path: '/remotingapi'}, 200, 'Ext.app.REMOTING_API = {"url":"/remotingapi","type":"remoting","actions":{"users":[{"name":"getList","len":0},{"name":"getGridList","len":5},{"name":"getNode","len":1},{"name":"readForm","len":1},{"name":"writeForm","len":1,"formHandler":true}]}};');

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
