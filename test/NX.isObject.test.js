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

    // {{{ test isObject#undefined

    'test isObject#undefined': function(){

        // undefinedテスト
        assert.ok(!NX.isObject(undefined), 'Test value undefined');

    },

    // }}}
    // {{{ test isObject#null

    'test isObject#null': function(){

        // nullテスト
        assert.ok(!NX.isObject(null), 'Test value null');

    },

    // }}}
    // {{{ test isObject#string

    'test isObject#string': function(){

        // 文字列テスト
        assert.ok(!NX.isObject('xFrameworkNX'), 'Test type string');

    },

    // }}}
    // {{{ test isObject#number

    'test isObject#number': function(){

        // 数値テスト
        assert.ok(!NX.isObject(8124), 'Test type number');

    },

    // }}}
    // {{{ test isObject#boolean

    'test isObject#boolean': function(){

        // 真偽値テスト
        assert.ok(!NX.isObject(true), 'Test type boolean value true');
        assert.ok(!NX.isObject(false), 'Test type boolean value false');

    },

    // }}}
    // {{{ test isObject#object

    'test isObject#object': function(){

        // オブジェクトテスト
        assert.ok(NX.isObject({}), 'Test type object');

    },

    // }}}
    // {{{ test isObject#array

    'test isObject#array': function(){

        // 配列オブジェクトテスト
        assert.ok(!NX.isObject([]), 'Test type array');

    },

    // }}}
    // {{{ test isObject#function

    'test isObject#function': function(){

        // 関数オブジェクトテスト
        assert.ok(!NX.isObject((function(){})), 'Test type function');

    },

    // }}}
    // {{{ test isObject#date

    'test isObject#date': function(){

        // 日付オブジェクトテスト
        assert.ok(!NX.isObject(new Date()), 'Test type date');

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
