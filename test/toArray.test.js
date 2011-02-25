/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

require('should');
var assert = require('assert');

var T_NX = require('NX/core');

// }}}
// {{{ toArray

module.exports = {

    // {{{ test toArray#number

    'test toArray#standard': function() {

        var ret;
        var arr = [1,2,3,4,5];

        ret = T_NX.toArray(arr, 2, 4);

        ret.length.should.equal(2);
        ret[0].should.equal(3);
        ret[1].should.equal(4);

    },

    // }}}
    // {{{ test toArray#string

    'test toArray#string': function() {

        var ret = T_NX.toArray('abc');
        ret[0].should.equal('a');
        ret[1].should.equal('b');
        ret[2].should.equal('c');

    },

    // }}}
    // {{{ test toArray#sting with range

    'test toArray#string with range': function() {

        var ret = T_NX.toArray('abc', 1, 2);
        ret[0].should.equal('b');

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
