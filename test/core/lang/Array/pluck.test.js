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
// {{{ pluck

module.exports = {

    // {{{ test pluck#pattern1

    'test pluck#pattern1': function() {

        var results = T_Array.pluck([{
            n: 11
        }, {
            n: 13
        }, {
            n: 18
        }], 'n');

        results[0].should.equal(11);
        results[1].should.equal(13);
        results[2].should.equal(18);
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
