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
// {{{ every

module.exports = {

    // {{{ test every#pattern1

    'test every#pattern1': function() {

        function isBigEnough(element, index, array) {
            return (element >= 10);
        }

        T_Array.every([12, 5, 8, 130, 44], isBigEnough).should.equal(false);
        T_Array.every([12, 54, 18, 130, 44], isBigEnough).should.equal(true);
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