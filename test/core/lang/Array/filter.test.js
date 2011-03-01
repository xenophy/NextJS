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
// {{{ filter

module.exports = {

    // {{{ test filter#pattern1

    'test filter#pattern1': function() {

        function isBigEnough(element, index, array) {
            return (element >= 10);
        }

        var filtered = T_Array.filter([12, 5, 8, 130, 44],isBigEnough);

        filtered[0].should.equal(12);
        filtered[1].should.equal(130);
        filtered[2].should.equal(44);
        filtered.length.should.equal(3);
    },

    // }}}
    // {{{ test filter#pattern2

    'test filter#pattern2': function() {

        try {
            var filtered = T_Array.filter([12, 5, 8, 130, 44]);
        } catch(e) {
            e.message.should.equal('[NX.Array.filter] fn must be a valid callback function');

        }
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
