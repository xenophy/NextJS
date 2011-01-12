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

    // {{{ test iterate#standard

    'test iterate#standard': function() {

        var dest = {};
        var src = {
            key1: 'value1',
            key2: 'value2',
            key3: 'value3',
            key4: 'value4',
            key5: 'value5'
        };

        NX.iterate(src, function(key, v, o) {
            dest[key] = v;
        });

        assert.equal(dest.key1, 'value1', 'Test key=key1 value=value1');
        assert.equal(dest.key2, 'value2', 'Test key=key2 value=value2');
        assert.equal(dest.key3, 'value3', 'Test key=key3 value=value3');
        assert.equal(dest.key4, 'value4', 'Test key=key4 value=value4');
        assert.equal(dest.key5, 'value5', 'Test key=key5 value=value5');

    },

    // }}}
    // {{{ test iterate#empty

    'test iterate#empty': function() {

        var dest = {};
        var src = {
            key1: 'value1',
            key2: 'value2',
            key3: 'value3',
            key4: 'value4',
            key5: 'value5'
        };

        NX.iterate(undefined, function(key, v, o) {
            dest[key] = v;
        });

        assert.equal(dest.key1, undefined, 'Test key=key1 value=undefined');
        assert.equal(dest.key2, undefined, 'Test key=key2 value=undefined');
        assert.equal(dest.key3, undefined, 'Test key=key3 value=undefined');
        assert.equal(dest.key4, undefined, 'Test key=key4 value=undefined');
        assert.equal(dest.key5, undefined, 'Test key=key5 value=undefined');

    },

    // }}}
    // {{{ test iterate#iterable

    'test iterate#iterable': function() {

        var dest = [];
        var src = {
            key1: 'value1',
            key2: 'value2',
            key3: 'value3',
            key4: 'value4',
            key5: 'value5'
        };

        NX.iterate([1,2,3,4,5], function(v, i, a) {
            dest.push(v);
        });

        assert.equal(dest[0], 1, 'Test value=1');
        assert.equal(dest[1], 2, 'Test value=2');
        assert.equal(dest[2], 3, 'Test value=3');
        assert.equal(dest[3], 4, 'Test value=4');
        assert.equal(dest[4], 5, 'Test value=5');

    },

    // }}}
    // {{{ test iterate#callbackFalse

    'test iterate#callbackFalse': function() {

        var dest = {};
        var src = {
            key1: 'value1',
            key2: 'value2',
            key3: 'value3',
            key4: 'value4',
            key5: 'value5'
        };

        NX.iterate(src, function(key, v, o) {
            return false;
        });

        assert.equal(dest.key1, undefined, 'Test key=key1 value=undefined');
        assert.equal(dest.key2, undefined, 'Test key=key2 value=undefined');
        assert.equal(dest.key3, undefined, 'Test key=key3 value=undefined');
        assert.equal(dest.key4, undefined, 'Test key=key4 value=undefined');
        assert.equal(dest.key5, undefined, 'Test key=key5 value=undefined');

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
