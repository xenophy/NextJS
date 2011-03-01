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
// {{{ isPrimitive

module.exports = {

    // {{{ test isPrimitive#undefined

    'test isPrimitive#undefined': function(){

        // undefinedテスト
        T_NX.isPrimitive(undefined).should.not.equal(true);

    },

    // }}}
    // {{{ test isPrimitive#null

    'test isPrimitive#null': function(){

        // nullテスト
        T_NX.isPrimitive(null).should.not.equal(true);

    },

    // }}}
    // {{{ test isPrimitive#string

    'test isPrimitive#string': function(){

        // 文字列テスト
        T_NX.isPrimitive('Next JS').should.equal(true);

    },

    // }}}
    // {{{ test isPrimitive#number

    'test isPrimitive#number': function(){

        // 数値テスト
        T_NX.isPrimitive(8124).should.equal(true);

    },

    // }}}
    // {{{ test isPrimitive#boolean

    'test isPrimitive#boolean': function(){

        // 真偽値テスト
        T_NX.isPrimitive(true).should.equal(true);
        T_NX.isPrimitive(false).should.equal(true);

    },

    // }}}
    // {{{ test isPrimitive#object

    'test isPrimitive#object': function(){

        // オブジェクトテスト
        T_NX.isPrimitive({}).should.not.equal(true);

    },

    // }}}
    // {{{ test isPrimitive#array

    'test isPrimitive#array': function(){

        // 配列オブジェクトテスト
        T_NX.isPrimitive([]).should.not.equal(true);

    },

    // }}}
    // {{{ test isPrimitive#function

    'test isPrimitive#function': function(){

        // 関数オブジェクトテスト
        T_NX.isPrimitive((function(){})).should.not.equal(true);

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
