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

var docRoot = './test/server/Action/';

// }}}
// {{{ Action Server Tests

module.exports = {

    // {{{ test action#pattern1

    'test action#pattern1': function(beforeExit) {

        NX.service({
            serverId: 'UnitTest0002',
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

                assert.response(NX.servers['UnitTest0002'], req, res, cb);

            }
        });

    },

    // }}}
    // {{{ test action#pattern2

    'test action#pattern2': function(beforeExit) {

        NX.service({
            serverId: 'UnitTest0003',
            port: process.env.NXTestServerPort++,
            workers: false,
            enableDaemon: false,
            bootarg: 'start',
            execPath: docRoot,
            next: function() {

                var req = {
                    url: '/error500.html',
                    method: 'GET'
                };
                var res = {
                    status: 500
                }
                var cb = function(res) {
                    assert.ok(res);
                };

                assert.response(NX.servers['UnitTest0003'], req, res, cb);

            }
        });

    },

    // }}}
    // {{{ test action#pattern3

    'test action#pattern3': function(beforeExit) {

        NX.service({
            serverId: 'UnitTest0004',
            port: process.env.NXTestServerPort++,
            workers: false,
            enableDaemon: false,
            bootarg: 'start',
            execPath: docRoot,
            next: function() {

                var req = {
                    url: '/favicon.ico',
                    method: 'GET'
                };
                var res = {
                    status: 200
                }
                var cb = function(res) {
                    assert.ok(res);
                };

                assert.response(NX.servers['UnitTest0004'], req, res, cb);

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
