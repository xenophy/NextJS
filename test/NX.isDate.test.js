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
    //
    // {{{ test isDate#undefined

    'test isDate#undefined': function(){

        // undefinedテスト
        assert.ok(!NX.isDate(undefined), 'Test value undefined');

    },

    // }}}
    // {{{ test isDate#null

    'test isDate#null': function(){

        // nullテスト
        assert.ok(!NX.isDate(null), 'Test value null');

    },

    // }}}
    // {{{ test isDate#string

    'test isDate#string': function(){

        // 文字列テスト
        assert.ok(!NX.isDate('xFrameworkNX'), 'Test type string');

    },

    // }}}
    // {{{ test isDate#number

    'test isDate#number': function(){

        // 数値テスト
        assert.ok(!NX.isDate(8124), 'Test type number');

    },

    // }}}
    // {{{ test isDate#boolean

    'test isDate#boolean': function(){

        // 真偽値テスト
        assert.ok(!NX.isDate(true), 'Test type boolean value true');
        assert.ok(!NX.isDate(false), 'Test type boolean value false');

    },

    // }}}
    // {{{ test isDate#object

    'test isDate#object': function(){

        // オブジェクトテスト
        assert.ok(!NX.isDate({}), 'Test type object');

    },

    // }}}
    // {{{ test isDate#array

    'test isDate#array': function(){

        // 配列オブジェクトテスト
        assert.ok(!NX.isDate([]), 'Test type array');

    },

    // }}}
    // {{{ test isDate#function

    'test isDate#function': function(){

        // 関数オブジェクトテスト
        assert.ok(!NX.isDate((function(){})), 'Test type function');

    },

    // }}}
    // {{{ test isDate#date

    'test isDate#date': function(){

        // 日付オブジェクトテスト
        assert.ok(NX.isDate(new Date()), 'Test type date');

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
