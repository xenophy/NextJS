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
// {{{ each

module.exports = {

    // {{{ test each#pattern1

    'test each#pattern1': function() {

        var tmp = [];
        var ret = T_Array.each([1,2,3,4,5], function(v) {
            tmp.push(v);
        });

        tmp.length.should.equal(5);
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
