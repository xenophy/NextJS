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
// {{{ unique

module.exports = {

    // {{{ test unique#pattern1

    'test unique#pattern1': function() {

        var ret = T_Array.unique([0,2,4,2,6,4,8,6,10]);

        ret[0].should.equal(0);
        ret[1].should.equal(2);
        ret[2].should.equal(4);
        ret[3].should.equal(6);
        ret[4].should.equal(8);
        ret[5].should.equal(10);
        ret.length.should.equal(6);

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
