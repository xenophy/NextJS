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
// {{{ clean

module.exports = {

    // {{{ test clean#pattern1

    'test clean#pattern1': function() {

        var ret = T_Array.clean([0, 1, 2, 3, 4]);

        ret[0].should.equal(0);
        ret[1].should.equal(1);
        ret[2].should.equal(2);
        ret[3].should.equal(3);
        ret[4].should.equal(4);
        ret.length.should.equal(5);
    },

    // }}}
    // {{{ test clean#pattern2

    'test clean#pattern2': function() {

        var ret = T_Array.clean([0, "", 2, "", 4]);

        ret[0].should.equal(0);
        ret[1].should.equal(2);
        ret[2].should.equal(4);
        ret.length.should.equal(3);

    },

    // }}}
    // {{{ test clean#pattern3

    'test clean#pattern3': function() {

        var ret = [0, 1, 2, 3, 4];
        ret[0] = '';
        ret[4] = '';

        ret = T_Array.clean(ret);

        ret[0].should.equal(1);
        ret[1].should.equal(2);
        ret[2].should.equal(3);
        ret.length.should.equal(3);

    },

    // }}}
    // {{{ test clean#pattern4

    'test clean#pattern4': function() {

        var ret = T_Array.clean([0, null, 2, null, 4]);

        ret[0].should.equal(0);
        ret[1].should.equal(2);
        ret[2].should.equal(4);
        ret.length.should.equal(3);

    },

    // }}}
    // {{{ test clean#pattern5

    'test clean#pattern5': function() {

        var ret = [0, 1, 2, 3, 4];
        ret[0] = null;
        ret[4] = null;

        ret = T_Array.clean(ret);

        ret[0].should.equal(1);
        ret[1].should.equal(2);
        ret[2].should.equal(3);
        ret.length.should.equal(3);

    },

    // }}}
    // {{{ test clean#pattern6

    'test clean#pattern6': function() {

        var ret = T_Array.clean([0, undefined, 2, undefined, 4]);

        ret[0].should.equal(0);
        ret[1].should.equal(2);
        ret[2].should.equal(4);
        ret.length.should.equal(3);

    },

    // }}}
    // {{{ test clean#pattern7

    'test clean#pattern7': function() {

        var ret = [0, 1, 2, 3, 4];
        ret[0] = undefined;
        ret[4] = undefined;

        ret = T_Array.clean(ret);

        ret[0].should.equal(1);
        ret[1].should.equal(2);
        ret[2].should.equal(3);
        ret.length.should.equal(3);

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
