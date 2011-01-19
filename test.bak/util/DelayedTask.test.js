/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

require('NX');
var assert = require('assert');

// }}}
// {{{ NX.util.DelayedTask Class Tests

module.exports = {

    // {{{ test standard

    'test standard': function(beforeExit) {

        var called = false;
        var task = new NX.util.DelayedTask(function() {
            called = true;
        });

        task.delay(100);

        beforeExit(function(){
            assert.equal(called, true);
        });

    },

    // }}}
    // {{{ test cancel

    'test cancel': function(beforeExit) {

        var called = false;
        var task = new NX.util.DelayedTask(function() {
            called = true;
        });

        task.delay(100);
        task.cancel();

        beforeExit(function(){
            assert.equal(called, false);
        });

    },

    // }}}
    // {{{ test scope

    'test scope': function(beforeExit) {

        var scope = {foo: 'bar'};
        var ret;
        var task = new NX.util.DelayedTask(function() {
            ret = this.foo;
        }, scope);

        task.delay(100);

        beforeExit(function(){
            assert.equal(ret, 'bar');
        });

    },

    // }}}
    // {{{ test args

    'test args': function(beforeExit) {

        var scope = {foo: 'bar'};
        var ret;
        var task = new NX.util.DelayedTask(function(a, b, c) {
            ret = a + b + c;
        }, scope, [1,2,3]);

        task.delay(100);

        beforeExit(function(){
            assert.equal(ret, 6);
        });

    },

    // }}}
    // {{{ test override

    'test override': function(beforeExit) {

        var scope = {foo: 'bar'};
        var ret;
        var task = new NX.util.DelayedTask(function() {
            ret = this.foo;
        }, scope);

        task.delay(100, function(suffix) {
            ret = this.foo + suffix;
        },{foo: 'override'}, ['d']);

        beforeExit(function(){
            assert.equal(ret, 'overrided');
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
