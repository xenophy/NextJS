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

    // {{{ test isNumber#undefined

    'test isNumber#undefined': function(){

        // undefinedテスト
        assert.ok(!NX.isNumber(undefined), 'Test value undefined');

    },

    // }}}
    // {{{ test isNumber#null

    'test isNumber#null': function(){

        // nullテスト
        assert.ok(!NX.isNumber(null), 'Test value null');

    },

    // }}}
    // {{{ test isNumber#string

    'test isNumber#string': function(){

        // 文字列テスト
        assert.ok(!NX.isNumber('xFrameworkNX'), 'Test type string');

    },

    // }}}
    // {{{ test isNumber#number

    'test isNumber#number': function(){

        // 数値テスト
        assert.ok(NX.isNumber(8124), 'Test type number');

    },

    // }}}
    // {{{ test isNumber#boolean

    'test isNumber#boolean': function(){

        // 真偽値テスト
        assert.ok(!NX.isNumber(true), 'Test type boolean value true');
        assert.ok(!NX.isNumber(false), 'Test type boolean value false');

    },

    // }}}
    // {{{ test isNumber#object

    'test isNumber#object': function(){

        // オブジェクトテスト
        assert.ok(!NX.isNumber({}), 'Test type object');

    },

    // }}}
    // {{{ test isNumber#array

    'test isNumber#array': function(){

        // 配列オブジェクトテスト
        assert.ok(!NX.isNumber([]), 'Test type array');

    },

    // }}}
    // {{{ test isNumber#function

    'test isNumber#function': function(){

        // 関数オブジェクトテスト
        assert.ok(!NX.isNumber((function(){})), 'Test type function');

    },

    // }}}
    // {{{ test isNumber#date

    'test isNumber#date': function(){

        // 日付オブジェクトテスト
        assert.ok(!NX.isNumber(new Date()), 'Test type date');

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
