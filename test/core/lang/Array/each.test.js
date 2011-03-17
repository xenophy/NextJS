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
var T_Array = require('NX/core/lang/Array');

// }}}
// {{{ each

module.exports = {

    // {{{ test each#pattern1

    'test each#pattern1': function() {

        var tmp = [];
        var ret = T_Array.each([1,2,3,4,5], function(v) {
            tmp.push(v);
        });

        tmp.length.should.equal(5);
    },

    // }}}
    // {{{ test each#pattern2

    'test each#pattern2': function() {

        var tmp = [];
        var ret = T_Array.each([], function(v) {
            tmp.push(v);
        });
        ret.should.equal(0);
        tmp.length.should.equal(0);
    },

    // }}}
    // {{{ test each#pattern3

    'test each#pattern3': function() {

        var tmp = [];
        var ret = T_Array.each(100, function(v) {
            tmp.push(v);
        });
        ret.should.equal(true);
        tmp[0].should.equal(100);
        tmp.length.should.equal(1);
    },

    // }}}
    // {{{ test each#pattern4

    'test each#pattern4': function() {

        var tmp = [];
        var ret = T_Array.each([1,2,3,4,5], function(v) {
            tmp.push(v);
            if(v === 3) {
                return false;
            }
        });

        tmp.length.should.equal(3);
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
