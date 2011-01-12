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

    // {{{ test isDefined#undefined

    'test isDefined#undefined': function(){

        // undefinedテスト
        assert.ok(!NX.isDefined(undefined), 'Test value undefined');

    },

    // }}}
    // {{{ test isDefined#null

    'test isDefined#null': function(){

        // nullテスト
        assert.ok(NX.isDefined(null), 'Test value null');

    },

    // }}}
    // {{{ test isDefined#string

    'test isDefined#string': function(){

        // 文字列テスト
        assert.ok(NX.isDefined('xFrameworkNX'), 'Test type string');

    },

    // }}}
    // {{{ test isDefined#number

    'test isDefined#number': function(){

        // 数値テスト
        assert.ok(NX.isDefined(8124), 'Test type number');

    },

    // }}}
    // {{{ test isDefined#boolean

    'test isDefined#boolean': function(){

        // 真偽値テスト
        assert.ok(NX.isDefined(true), 'Test type boolean value true');
        assert.ok(NX.isDefined(false), 'Test type boolean value false');

    },

    // }}}
    // {{{ test isDefined#object

    'test isDefined#object': function(){

        // オブジェクトテスト
        assert.ok(NX.isDefined({}), 'Test type object');

    },

    // }}}
    // {{{ test isDefined#array

    'test isDefined#array': function(){

        // 配列オブジェクトテスト
        assert.ok(NX.isDefined([]), 'Test type array');

    },

    // }}}
    // {{{ test isDefined#function

    'test isDefined#function': function(){

        // 関数オブジェクトテスト
        assert.ok(NX.isDefined((function(){})), 'Test type function');

    },

    // }}}
    // {{{ test isDefined#date

    'test isDefined#date': function(){

        // 日付オブジェクトテスト
        assert.ok(NX.isDefined(new Date()), 'Test type date');

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
