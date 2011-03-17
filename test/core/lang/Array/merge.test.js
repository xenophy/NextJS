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
// {{{ merge

module.exports = {

    // {{{ test merge#pattern1

    'test merge#pattern1': function() {

        var ret = T_Array.merge([0, 1, 2], [3, 4, 5], [6, 7], [8, 9, 10, 11]);

        ret.length.should.equal(12);

        ret[0].should.equal(0);
        ret[1].should.equal(1);
        ret[2].should.equal(2);
        ret[3].should.equal(3);
        ret[4].should.equal(4);
        ret[5].should.equal(5);
        ret[6].should.equal(6);
        ret[7].should.equal(7);
        ret[8].should.equal(8);
        ret[9].should.equal(9);
        ret[10].should.equal(10);
        ret[11].should.equal(11);

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
