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

    // {{{ test isString#undefined

    'test isString#undefined': function(){

        // undefinedテスト
        assert.ok(!NX.isString(undefined), 'Test value undefined');

    },

    // }}}
    // {{{ test isString#null

    'test isString#null': function(){

        // nullテスト
        assert.ok(!NX.isString(null), 'Test value null');

    },

    // }}}
    // {{{ test isString#string

    'test isString#string': function(){

        // 文字列テスト
        assert.ok(NX.isString('xFrameworkNX'), 'Test type string');

    },

    // }}}
    // {{{ test isString#number

    'test isString#number': function(){

        // 数値テスト
        assert.ok(!NX.isString(8124), 'Test type number');

    },

    // }}}
    // {{{ test isString#boolean

    'test isString#boolean': function(){

        // 真偽値テスト
        assert.ok(!NX.isString(true), 'Test type boolean value true');
        assert.ok(!NX.isString(false), 'Test type boolean value false');

    },

    // }}}
    // {{{ test isString#object

    'test isString#object': function(){

        // オブジェクトテスト
        assert.ok(!NX.isString({}), 'Test type object');

    },

    // }}}
    // {{{ test isString#array

    'test isString#array': function(){

        // 配列オブジェクトテスト
        assert.ok(!NX.isString([]), 'Test type array');

    },

    // }}}
    // {{{ test isString#function

    'test isString#function': function(){

        // 関数オブジェクトテスト
        assert.ok(!NX.isString((function(){})), 'Test type function');

    },

    // }}}
    // {{{ test isString#date

    'test isString#date': function(){

        // 日付オブジェクトテスト
        assert.ok(!NX.isString(new Date()), 'Test type date');

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
