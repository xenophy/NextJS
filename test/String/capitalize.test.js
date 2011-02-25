/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

require('should');
var assert = require('assert');

var T_String = require('NX/String');

// }}}
// {{{ capitalize

module.exports = {

    // {{{ test capitalize#pattern1

    'test trim#pattern1': function() {
        T_String.capitalize('nextjs').should.equal('Nextjs');
    },

    // }}}
    // {{{ test trim#pattern2

    'test trim#pattern2': function() {
        T_String.capitalize('NextJS').should.equal('Nextjs');
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
