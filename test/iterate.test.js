/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

require('should');
var assert = require('assert');

var T_NX = require('NX/core');

// }}}
// {{{ iterate

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

        T_NX.iterate(src, function(key, v, o) {
            dest[key] = v;
        });

        dest.key1.should.equal('value1');
        dest.key2.should.equal('value2');
        dest.key3.should.equal('value3');
        dest.key4.should.equal('value4');
        dest.key5.should.equal('value5');

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

        T_NX.iterate(undefined, function(key, v, o) {
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

        T_NX.iterate([1,2,3,4,5], function(v, i, a) {
            dest.push(v);
        });

        dest[0].should.equal(1);
        dest[1].should.equal(2);
        dest[2].should.equal(3);
        dest[3].should.equal(4);
        dest[4].should.equal(5);

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

        T_NX.iterate(src, function(key, v, o) {
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
