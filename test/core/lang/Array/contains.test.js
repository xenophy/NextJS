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
// {{{ contains

module.exports = {

    // {{{ test contains#pattern1

    'test contains#pattern1': function() {

        var array = [2, 5, 9];
        T_Array.contains(array, 2).should.equal(true);
        T_Array.contains(array, 5).should.equal(true);
        T_Array.contains(array, 9).should.equal(true);
        T_Array.contains(array, 7).should.equal(false);


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
