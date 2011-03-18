/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

require('should');
var assert = require('assert');

require('NX/core/class/ClassManager');
var T_Function = require('NX/core/lang/Function');

// }}}
// {{{ createBuffered

module.exports = {

    // {{{ test createBuffered#pattern1

    'test createBuffered#pattern1': function() {

        var f = function() {

            var endTime = new Date();
            var msec = endTime - startTime;

            msec.should.be.within(50,200);

        };

        var startTime = new Date();
        T_Function.createBuffered(f, 50)();

    },

    // }}}
    // {{{ test createBuffered#pattern2

    'test createBuffered#pattern2': function() {

        var f = function(arg1, arg2, arg3) {

            var endTime = new Date();
            var msec = endTime - startTime;

            msec.should.be.within(50,200);

            arg1.should.equal(4);
            arg2.should.equal(5);
            arg3.should.equal(6);

        }

        var startTime = new Date();
        T_Function.createBuffered(f, 50, this, [4,5,6])();

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
