/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

require('should');
var assert = require('assert');

var T_Array = require('NX/Array');

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
