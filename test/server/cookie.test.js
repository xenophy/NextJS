/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

require('NX');
require('should');
assert = require('assert');
require('../shared/env');

// }}}
// {{{ setup

var docRoot = './test/server/Cookie/';

// }}}
// {{{ Cookie Server Tests

module.exports = {

    // {{{ test cookie#pattern1

    'test cookie#pattern1': function(beforeExit) {

        NX.service({
            serverId: 'UnitTestCookie0001',
            port: process.env.NXTestServerPort++,
            workers: false,
            enableDaemon: false,
            bootarg: 'start',
            execPath: docRoot,
            next: function() {

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
                    assert.ok(NX.Array.contains('param1=kotsutsumi; expires=Sun, 15 May 2011 15:00:00 GMT; path=/; domain=127.0.0.1; secure; httpOnly', cookies));
                };

                assert.response(NX.servers['UnitTestCookie0001'], req, res, cb);

            }
        });

    },

    // }}}
    // {{{ test cookie#pattern2

    'test cookie#pattern2': function(beforeExit) {

        NX.service({
            serverId: 'UnitTestCookie0002',
            port: process.env.NXTestServerPort++,
            workers: false,
            enableDaemon: false,
            bootarg: 'start',
            execPath: docRoot,
            next: function() {

                var file = NX.Fs.readFileSync(docRoot + '/public/index.result.html').toString();

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

                assert.response(NX.servers['UnitTestCookie0002'], req, res, cb);

            }
        });

    },

    // }}}


};

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
