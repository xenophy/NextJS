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

// }}}
// {{{ NX.data.MemoryStore Class Tests

module.exports = {

    // {{{ 'test set#pattern1'

    'test set#pattern1': function(beforeExit) {

        var s = NX.create('NX.data.MemoryStore');
        var trace = false;
        var trace2 = false;

        s.set('teston000001', {
            values: {
                foo: 'bar'
            },
            cookie: {
                expires: new Date('2100-07-11'),
                orig: 14400000
            }
        }, function() {
            trace = true;
        });

        s.get('teston000001', function(err, v) {
            trace2 = true;

            v.values.foo.should.equal('bar');
            v.expires.should.equal(4118947200000);
        });

        beforeExit(function() {

            trace.should.equal(true);
            trace2.should.equal(true);

            var o = NX.JSON.decode(s.sessions.teston000001);

            s.sessions.teston000001.should.equal('{"values":{"foo":"bar"},"expires":4118947200000}');
            o.values.foo.should.equal('bar');
            o.expires.should.equal(4118947200000);
        });

    },

    // }}}
    // {{{ 'test set#pattern2'

    'test set#pattern2': function(beforeExit) {

        var s = NX.create('NX.data.MemoryStore');

        s.set('teston000002', {
            values: {
                foo: 'bar'
            },
            cookie: {
                expires: new Date('1900-07-11'),
                orig: 14400000
            }
        });

        s.get('teston000002', function(err, v) {
            assert.equal(v, undefined);
        });

        s.get('teston000003', function(err, v) {
            assert.equal(v, undefined);
        });

    },

    // }}}
    // {{{ 'test all#pattern1'

    'test all#pattern1': function(beforeExit) {

        var s = NX.create('NX.data.MemoryStore');

        s.set('teston000004', {
            values: {
                foo: 'bar'
            },
            cookie: {
                expires: new Date('2100-07-11'),
                orig: 14400000
            }
        });

        s.set('teston000005', {
            values: {
                foo2: 'bar2'
            },
            cookie: {
                expires: new Date('2100-07-11'),
                orig: 14400000
            }
        });

        s.all(function(err, v) {
            v[0].values.foo.should.equal('bar');
            v[1].values.foo2.should.equal('bar2');

            s.clear(function() {

                s.all(function(err, v) {
                    v.length.should.equal(0);
                    s.length(function(err, len) {
                        len.should.equal(0);
                    });
                });

            });

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
