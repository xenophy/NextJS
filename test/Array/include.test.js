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
// {{{ include

module.exports = {

    // {{{ test include#pattern1

    'test include#pattern1': function() {

        var ret = [0, 1, 2, 3, 4];
        T_Array.include(ret, 5);

        ret[0].should.equal(0);
        ret[1].should.equal(1);
        ret[2].should.equal(2);
        ret[3].should.equal(3);
        ret[4].should.equal(4);
        ret[5].should.equal(5);
        ret.length.should.equal(6);
    },

    // }}}
    // {{{ test include#pattern2

    'test include#pattern2': function() {

        var ret = [0, 1, 2, 3, 4];
        T_Array.include([0, 1, 2, 3, 4], 2);

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
