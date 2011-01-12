/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * xFramework NX
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

require('NX');
var assert = require('assert');

// }}}
// {{{ NX Class Tests

module.exports = {

    // {{{ test isIterable

    'test isIterable': function() {

        var a = [];
        var str = '';

        assert.ok(NX.isIterable(a), 'Test array');
        assert.ok(NX.isIterable(arguments), 'Test function');
        assert.ok(!NX.isIterable(str), 'Test string');

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
