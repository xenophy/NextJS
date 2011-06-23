/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

require('NX');
require('should');
assert = require('assert');

// }}}
// {{{ NX.Loader Class Tests

module.exports = {

    // {{{ test require#pattern1

    'test require#pattern1': function(){

        NX.Loader.require('NXTest.Loader.p1cls');

    },

    // }}}

};

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
