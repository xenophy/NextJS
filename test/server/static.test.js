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

var docRoot = './test/server/Static/';

// }}}
// {{{ Static Server Tests

module.exports = {

    // {{{ test static#pattern1

    'test static#pattern1': function(beforeExit) {

        NX.service({
            serverId: 'UnitTest0001',
            port: process.env.NXTestServerPort++,
            workers: false,
            enableDaemon: false,
            bootarg: 'start',
            execPath: docRoot,
            next: function() {

                var file = NX.Fs.readFileSync(docRoot + '/public/index.result.html').toString();
                var req = {
                    url: '/',
                    method: 'GET'
                };
                var res = {
                    body: file,
                    status: 200
                }
                var cb = function(res) {
                    res.body.should.equal(file);
                    assert.ok(res);
                };

                assert.response(NX.servers['UnitTest0001'], req, res, cb);

            }
        });

    },

    // }}}
    // {{{ test static#pattern2

    'test static#pattern2': function(beforeExit) {

        NX.service({
            serverId: 'UnitTestStatic0002',
            port: process.env.NXTestServerPort++,
            workers: false,
            enableDaemon: false,
            bootarg: 'start',
            execPath: docRoot,
            next: function() {

                var req = {
                    url: '/error404',
                    method: 'GET'
                };
                var res = {
                    status: 404
                }
                var cb = function(res) {
                    assert.ok(res);
                };

                assert.response(NX.servers['UnitTestStatic0002'], req, res, cb);

            }
        });

    },

    // }}}
    // {{{ test static#pattern3

    'test static#pattern3': function(beforeExit) {

        NX.service({
            serverId: 'UnitTestStatic0003',
            port: process.env.NXTestServerPort++,
            workers: false,
            enableDaemon: false,
            bootarg: 'start',
            execPath: docRoot,
            next: function() {

                var req = {
                    url: '/(-_-)v/images/error404.gif',
                    method: 'GET'
                };
                var res = {
                    status: 200
                }
                var cb = function(res) {
                    assert.ok(res);
                };

                assert.response(NX.servers['UnitTestStatic0003'], req, res, cb);

            }
        });

    },

    // }}}
    // {{{ test static#pattern4

    'test static#pattern4': function(beforeExit) {

        NX.service({
            serverId: 'UnitTestStatic0004',
            port: process.env.NXTestServerPort++,
            workers: false,
            enableDaemon: false,
            bootarg: 'start',
            execPath: docRoot,
            next: function() {

                var req = {
                    url: '/(-_-)v/images/error404_.gif',
                    method: 'GET'
                };
                var res = {
                    status: 404
                }
                var cb = function(res) {
                    assert.ok(res);
                };

                assert.response(NX.servers['UnitTestStatic0004'], req, res, cb);

            }
        });

    }

    // }}}




};

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
