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

    // {{{ test isFunction#undefined

    'test isFunction#undefined': function(){

        // undefinedテスト
        assert.ok(!NX.isFunction(undefined), 'Test value undefined');

    },

    // }}}
    // {{{ test isFunction#null

    'test isFunction#null': function(){

        // nullテスト
        assert.ok(!NX.isFunction(null), 'Test value null');

    },

    // }}}
    // {{{ test isFunction#string

    'test isFunction#string': function(){

        // 文字列テスト
        assert.ok(!NX.isFunction('xFrameworkNX'), 'Test type string');

    },

    // }}}
    // {{{ test isFunction#number

    'test isFunction#number': function(){

        // 数値テスト
        assert.ok(!NX.isFunction(8124), 'Test type number');

    },

    // }}}
    // {{{ test isFunction#boolean

    'test isFunction#boolean': function(){

        // 真偽値テスト
        assert.ok(!NX.isFunction(true), 'Test type boolean value true');
        assert.ok(!NX.isFunction(false), 'Test type boolean value false');

    },

    // }}}
    // {{{ test isFunction#object

    'test isFunction#object': function(){

        // オブジェクトテスト
        assert.ok(!NX.isFunction({}), 'Test type object');

    },

    // }}}
    // {{{ test isFunction#array

    'test isFunction#array': function(){

        // 配列オブジェクトテスト
        assert.ok(!NX.isFunction([]), 'Test type array');

    },

    // }}}
    // {{{ test isFunction#function

    'test isFunction#function': function(){

        // 関数オブジェクトテスト
        assert.ok(NX.isFunction((function(){})), 'Test type function');

    },

    // }}}
    // {{{ test isFunction#date

    'test isFunction#date': function(){

        // 日付オブジェクトテスト
        assert.ok(!NX.isFunction(new Date()), 'Test type date');

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
