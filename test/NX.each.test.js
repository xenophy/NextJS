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

    // {{{ test each#standard

    'test each#standard': function() {

        var tmp = [];
        var ret = NX.each([1,2,3,4,5], function(v) {
            tmp.push(v);
        });

        assert.equal(tmp.length, 5, 'Test each standard');

    },

    // }}}
    // {{{ test each#empty

    'test each#empty': function() {

        var ret = NX.each(undefined, function() {});

        assert.ok(!ret, 'Test each returns undefined');

    },

    // }}}
    // {{{ test each#notIterable

    'test each#notIterable': function() {

        var ret = NX.each('xFrameworkNX', function(v) {
            assert.equal(v, 'xFrameworkNX', 'Test value not iterable');
        });

    },

    // }}}
    // {{{ test each#primitive

    'test each#primitive': function() {

        var ret = NX.each(8124, function(v) {
            assert.equal(v, 8124, 'Test value primitive');
        });

    },

    // }}}
    // {{{ test each#callbackFalse

    'test each#callbackFalse': function() {

        var tmp = [];
        var ret = NX.each([1,2,3,4,5], function(v) {
            tmp.push(v);
            if(v === 3) {
                return false;
            }
        });

        assert.equal(tmp.length, 3, 'Test callback return false');

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
