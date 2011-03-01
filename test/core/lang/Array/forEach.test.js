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
// {{{ forEach

module.exports = {

    // {{{ test forEach#pattern1

    'test forEach#pattern1': function() {

        var array = [1,2,3,4,5];
        var cnt = 0;

        T_Array.forEach(array, function() {
            cnt++;
        });

        cnt.should.equal(5);
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
