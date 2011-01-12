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

    // {{{ test isPrimitive#undefined

    'test isPrimitive#undefined': function(){

        // undefinedテスト
        assert.ok(!NX.isPrimitive(undefined), 'Test value undefined');

    },

    // }}}
    // {{{ test isPrimitive#null

    'test isPrimitive#null': function(){

        // nullテスト
        assert.ok(!NX.isPrimitive(null), 'Test value null');

    },

    // }}}
    // {{{ test isPrimitive#string

    'test isPrimitive#string': function(){

        // 文字列テスト
        assert.ok(NX.isPrimitive('xFrameworkNX'), 'Test type string');

    },

    // }}}
    // {{{ test isPrimitive#number

    'test isPrimitive#number': function(){

        // 数値テスト
        assert.ok(NX.isPrimitive(8124), 'Test type number');

    },

    // }}}
    // {{{ test isPrimitive#boolean

    'test isPrimitive#boolean': function(){

        // 真偽値テスト
        assert.ok(NX.isPrimitive(true), 'Test type boolean value true');
        assert.ok(NX.isPrimitive(false), 'Test type boolean value false');

    },

    // }}}
    // {{{ test isPrimitive#object

    'test isPrimitive#object': function(){

        // オブジェクトテスト
        assert.ok(!NX.isPrimitive({}), 'Test type object');

    },

    // }}}
    // {{{ test isPrimitive#array

    'test isPrimitive#array': function(){

        // 配列オブジェクトテスト
        assert.ok(!NX.isPrimitive([]), 'Test type array');

    },

    // }}}
    // {{{ test isPrimitive#function

    'test isPrimitive#function': function(){

        // 関数オブジェクトテスト
        assert.ok(!NX.isPrimitive((function(){})), 'Test type function');

    },

    // }}}
    // {{{ test isPrimitive#date

    'test isPrimitive#date': function(){

        // 日付オブジェクトテスト
        assert.ok(!NX.isPrimitive(new Date()), 'Test type date');

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
