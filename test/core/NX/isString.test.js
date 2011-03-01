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
// {{{ isString

module.exports = {

    // {{{ test isString#undefined

    'test isString#undefined': function(){

        // undefinedテスト
        T_NX.isString(undefined).should.not.equal(true);

    },

    // }}}
    // {{{ test isString#null

    'test isString#null': function(){

        // nullテスト
        T_NX.isString(null).should.not.equal(true);

    },

    // }}}
    // {{{ test isString#string

    'test isString#string': function(){

        // 文字列テスト
        T_NX.isString('Next JS').should.equal(true);

    },

    // }}}
    // {{{ test isString#number

    'test isString#number': function(){

        // 数値テスト
        T_NX.isString(8124).should.not.equal(true);

    },

    // }}}
    // {{{ test isString#boolean

    'test isString#boolean': function(){

        // 真偽値テスト
        T_NX.isString(true).should.not.equal(true);
        T_NX.isString(false).should.not.equal(true);

    },

    // }}}
    // {{{ test isString#object

    'test isString#object': function(){

        // オブジェクトテスト
        T_NX.isString({}).should.not.equal(true);

    },

    // }}}
    // {{{ test isString#array

    'test isString#array': function(){

        // 配列オブジェクトテスト
        T_NX.isString([]).should.not.equal(true);

    },

    // }}}
    // {{{ test isString#function

    'test isString#function': function(){

        // 関数オブジェクトテスト
        T_NX.isString((function(){})).should.not.equal(true);

    },

    // }}}
    // {{{ test isString#date

    'test isString#date': function(){

        // 日付オブジェクトテスト
        T_NX.isString(new Date()).should.not.equal(true);

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
