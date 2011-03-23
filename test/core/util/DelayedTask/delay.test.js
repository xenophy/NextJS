/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

require('should');
var assert = require('assert');

var T_UTIL_DelayedTask = require('NX/core/util/DelayedTask');

// }}}
// {{{ delay

module.exports = {

    // {{{ test delay#pattern1

    'test delay#pattern1': function() {

        var startTime = new Date();

        var dt = new T_UTIL_DelayedTask(function() {
            var endTime = new Date();
            var msec = endTime - startTime;

            msec.should.be.within(10,1000);
        });

        dt.delay(10);

    },

    // }}}
    // {{{ test delay#pattern2

    'test delay#pattern2': function() {

        var me = this,
            startTime = new Date(),
            test = {};

        var dt = new T_UTIL_DelayedTask(function() {
            var endTime = new Date();
            var msec = endTime - startTime;

            assert.equal(this, me);
            msec.should.be.within(10,1000);
        });

        dt.delay(10, function(arg){
            var endTime = new Date();
            var msec = endTime - startTime;

            assert.equal(this, test);
            arg.should.equal('hoge');
            msec.should.be.within(10,1000);

        }, test, ['hoge']);

    },

    // }}}
    // {{{ test delay#pattern3

    'test delay#pattern3': function() {

        var startTime = new Date(),
            count = 0;

        var dt = new T_UTIL_DelayedTask(function() {
            var endTime = new Date();
            var msec = endTime - startTime;
            ++count;
            count.should.equal(1);
            msec.should.be.within(10,1000);
        });

        dt.delay(1001);
        dt.delay(10);

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
