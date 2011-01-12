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

    // {{{ test isArray#string

    'test isArray#string': function(){

        // 文字列テスト
        assert.ok(!NX.isArray('xFrameworkNX'), 'Test type string');

    },

    // }}}
    // {{{ test isArray#number

    'test isArray#number': function(){

        // 数値テスト
        assert.ok(!NX.isArray(8124), 'Test type number');

    },

    // }}}
    // {{{ test isArray#boolean

    'test isArray#boolean': function(){

        // 真偽値テスト
        assert.ok(!NX.isArray(true), 'Test type boolean value true');
        assert.ok(!NX.isArray(false), 'Test type boolean value false');

    },

    // }}}
    // {{{ test isArray#object

    'test isArray#object': function(){

        // オブジェクトテスト
        assert.ok(!NX.isArray({}), 'Test type object');

    },

    // }}}
    // {{{ test isArray#array

    'test isArray#array': function(){

        // 配列オブジェクトテスト
        assert.ok(NX.isArray([]), 'Test type array');

    },

    // }}}
    // {{{ test isArray#function

    'test isArray#function': function(){

        // 関数オブジェクトテスト
        assert.ok(!NX.isArray((function(){})), 'Test type function');

    },

    // }}}
    // {{{ test isArray#date

    'test isArray#date': function(){

        // 日付オブジェクトテスト
        assert.ok(!NX.isArray(new Date()), 'Test type date');

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
