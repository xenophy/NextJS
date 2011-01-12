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

    // {{{ test isBoolean#undefined

    'test isBoolean#undefined': function(){

        // undefinedテスト
        assert.ok(!NX.isBoolean(undefined), 'Test value undefined');

    },

    // }}}
    // {{{ test isBoolean#null

    'test isBoolean#null': function(){

        // nullテスト
        assert.ok(!NX.isBoolean(null), 'Test value null');

    },

    // }}}
    // {{{ test isBoolean#string

    'test isBoolean#string': function(){

        // 文字列テスト
        assert.ok(!NX.isBoolean('xFrameworkNX'), 'Test type string');

    },

    // }}}
    // {{{ test isBoolean#number

    'test isBoolean#number': function(){

        // 数値テスト
        assert.ok(!NX.isBoolean(8124), 'Test type number');

    },

    // }}}
    // {{{ test isBoolean#boolean

    'test isBoolean#boolean': function(){

        // 真偽値テスト
        assert.ok(NX.isBoolean(true), 'Test type boolean value true');
        assert.ok(NX.isBoolean(false), 'Test type boolean value false');

    },

    // }}}
    // {{{ test isBoolean#object

    'test isBoolean#object': function(){

        // オブジェクトテスト
        assert.ok(!NX.isBoolean({}), 'Test type object');

    },

    // }}}
    // {{{ test isBoolean#array

    'test isBoolean#array': function(){

        // 配列オブジェクトテスト
        assert.ok(!NX.isBoolean([]), 'Test type array');

    },

    // }}}
    // {{{ test isBoolean#function

    'test isBoolean#function': function(){

        // 関数オブジェクトテスト
        assert.ok(!NX.isBoolean((function(){})), 'Test type function');

    },

    // }}}
    // {{{ test isBoolean#date

    'test isBoolean#date': function(){

        // 日付オブジェクトテスト
        assert.ok(!NX.isBoolean(new Date()), 'Test type date');

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
