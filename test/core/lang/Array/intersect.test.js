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
// {{{ intersect

module.exports = {

    // {{{ test intersect#pattern1

    'test intersect#pattern1': function() {

        var arr1 = [1, 2, 4, 5, 7, 8],
            arr2 = [3, 4, 5, 8, 9],
            arr3 = [1, 2, 3, 5, 7, 8, 9],
            arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9],
            ret;

        ret = T_Array.intersect(arr1, arr2, arr3);

        ret.length.should.equal(2);
        ret[0].should.equal(5);
        ret[1].should.equal(8);

    },

    // }}}
    // {{{ test intersect#pattern2

    'test intersect#pattern2': function() {

        var arr1 = ['hoge', 'foo', 'bar', 'test'],
            arr2 = ['test', 'xenophy'],
            arr3 = ['hoge', 'piyo', 'test'],
            ret;

        ret = T_Array.intersect(arr1, arr2, arr3);
        ret.length.should.equal(1);
        ret[0].should.equal('test');

    },

    // }}}
    // {{{ test intersect#pattern3

    'test intersect#pattern3': function() {

        var ret = T_Array.intersect();

        ret.length.should.equal(0);

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
