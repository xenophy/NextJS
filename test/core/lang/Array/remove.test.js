/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

require('should');
var assert = require('assert');

var T_Array = require('NX/core/lang/Array');

// }}}
// {{{ remove

module.exports = {

    // {{{ test remove#pattern1

    'test remove#pattern1': function() {

        var ret = T_Array.remove([0,1,2,3,4], 3);

        ret[0].should.equal(0);
        ret[1].should.equal(1);
        ret[2].should.equal(2);
        ret[3].should.equal(4);
        ret.length.should.equal(4);
    },

    // }}}
    // {{{ test remove#pattern2

    'test remove#pattern2': function() {

        var ret = T_Array.remove([0,1,2,3,4], 9);

        ret[0].should.equal(0);
        ret[1].should.equal(1);
        ret[2].should.equal(2);
        ret[3].should.equal(3);
        ret[4].should.equal(4);
        ret.length.should.equal(5);

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
