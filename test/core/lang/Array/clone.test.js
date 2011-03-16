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
// {{{ clone

module.exports = {

    // {{{ test clone#pattern1

    'test clone#pattern1': function() {

        var src = [0, 1, 2, 3, 4];
        var ret = T_Array.clone(src);

        src.length.should.equal(5);
        ret.length.should.equal(5);

        src[0] *= 10;
        src[1] *= 10;
        src[2] *= 10;
        src[3] *= 10;
        src[4] *= 10;

        src[0].should.equal(0);
        src[1].should.equal(10);
        src[2].should.equal(20);
        src[3].should.equal(30);
        src[4].should.equal(40);

        ret[0].should.equal(0);
        ret[1].should.equal(1);
        ret[2].should.equal(2);
        ret[3].should.equal(3);
        ret[4].should.equal(4);
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
