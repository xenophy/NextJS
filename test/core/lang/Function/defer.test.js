/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

require('should');
var assert = require('assert');

var T_Function = require('NX/core/lang/Function');

// }}}
// {{{ defer

module.exports = {

    // {{{ test defer#pattern1

    'test defer#pattern1': function() {

        var startTime = new Date();

        T_Function.defer(function() {

            var endTime = new Date();
            var msec = endTime - startTime;

            msec.should.be.within(10,1000);

        }, 10).should.not.equal(0);

    },

    // }}}
    // {{{ test defer#pattern2

    'test defer#pattern2': function() {

        var startTime = new Date();

        T_Function.defer(function() {

            var endTime = new Date();
            var msec = endTime - startTime;

            msec.should.be.within(0,1000);

        }).should.equal(0);

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
