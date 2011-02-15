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

var testName = 'mongodb';
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

    // {{{ test mongodb#mod1

    /**
     * 手動によるデータベース接続、成功パターン
     */
    'test mongodb#mod1': function(beforeExit) {

        var file = fs.readFileSync(docRoot + '/public_html/mod1.result.html').toString();
        var req = {
            url: '/mod1.html',
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
    // {{{ test mongodb#mod2

    /**
     * 手動によるデータベース接続、失敗パターン
     */
    'test mongodb#mod2': function(beforeExit) {

        var req = {
            url: '/mod2.html',
            status: 500,
            method: 'GET'
        };
        var res = {
        };
        var cb = function(res) {
            assert.ok(res);
        };

        assert.response(server, req, res, cb);
    },

    // }}}
    // {{{ test mongodb#mod3

    /**
     * コレクション作成→存在確認→コレクション削除
     */
    'test mongodb#mod3': function(beforeExit) {

        var file = fs.readFileSync(docRoot + '/public_html/mod3.result.html').toString();
        var req = {
            url: '/mod3.html',
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
    // {{{ test mongodb#mod4

    /**
     * コレクション作成→コレクション名変更→存在確認→コレクション削除
     */
    'test mongodb#mod4': function(beforeExit) {

        var file = fs.readFileSync(docRoot + '/public_html/mod4.result.html').toString();
        var req = {
            url: '/mod4.html',
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


};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
