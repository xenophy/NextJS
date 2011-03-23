/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

require('should');
var assert = require('assert');

var T_String = require('NX/core/lang/String');

// }}}
// {{{ escape

module.exports = {

    // {{{ test escape#pattern1

    'test escape#pattern1': function() {
        T_String.escape("'").should.equal("\\'");
    },

    // }}}
    // {{{ test escape#pattern2

    'test escape#pattern2': function() {
        T_String.escape("\\").should.equal("\\\\");
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
