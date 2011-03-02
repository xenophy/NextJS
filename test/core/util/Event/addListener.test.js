/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

require('should');
var assert = require('assert');

var T_UTIL_Event = require('NX/core/util/Event');

// }}}
// {{{ addListener

module.exports = {

    // {{{ test addListener#pattern1

    'test addListener#pattern1': function(beforeExit) {

        var f = function() {
            return 'f';
        };

        var ev = new T_UTIL_Event();

        ev.addListener(f);

        ev.listeners.length.should.equal(1);

    },

    // }}}
    // {{{ test addListener#pattern2

    'test addListener#pattern2': function(beforeExit) {

        var startTime = new Date();

        var fc = 0;
        var fc2 = 0;

        var f = function() {
            var endTime = new Date();
            var msec = endTime - startTime;

            msec.should.be.within(10,100);
            fc++;
        };

        var f2 = function() {
            var endTime = new Date();
            var msec = endTime - startTime;

            msec.should.be.within(10,100);
            fc2++;
        };

        var ev = new T_UTIL_Event();

        ev.addListener(f, f, {
            delay: 10
        });

        ev.addListener(f2, f2, {
            delay: 10
        });

        ev.fire();
        ev.fire();

        beforeExit(function() {
            fc.should.equal(2);
            fc2.should.equal(2);
        });
    },

    // }}}
    // {{{ test addListener#pattern3

    'test addListener#pattern3': function(beforeExit) {

        var startTime = new Date();

        var fc = 0;
        var fc2 = 0;

        var f = function() {
            var endTime = new Date();
            var msec = endTime - startTime;

            msec.should.be.within(10,100);
            fc++;
        };

        var f2 = function() {
            var endTime = new Date();
            var msec = endTime - startTime;

            msec.should.be.within(10,100);
            fc2++;
        };

        var ev = new T_UTIL_Event();

        ev.addListener(f, f, {
            buffer: 10
        });

        ev.addListener(f2, f2, {
            buffer: 10
        });

        ev.fire();
        ev.listeners.length.should.equal(2);
        ev.fire();

        beforeExit(function() {
            fc.should.equal(1);
            fc2.should.equal(1);
        });
    },

    // }}}
    // {{{ test addListener#pattern4

    'test addListener#pattern4': function(beforeExit) {

        var startTime = new Date();

        var fc = 0;
        var fc2 = 0;

        var f = function() {
            var endTime = new Date();
            var msec = endTime - startTime;

            msec.should.be.within(0,100);
            fc++;
        };

        var f2 = function() {
            var endTime = new Date();
            var msec = endTime - startTime;

            msec.should.be.within(0,100);
            fc2++;
        };

        var ev = new T_UTIL_Event();

        ev.addListener(f, f, {
            single: true
        });

        ev.addListener(f2, f2, {
            single: true
        });

        ev.fire();
        ev.listeners.length.should.equal(0);
        ev.fire();

        beforeExit(function() {
            fc.should.equal(1);
            fc2.should.equal(1);
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
