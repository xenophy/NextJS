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
// {{{ isNumber

module.exports = {

    // {{{ test isNumber#undefined

    'test isNumber#undefined': function(){

        // undefinedテスト
        T_NX.isNumber(undefined).should.not.equal(true);

    },

    // }}}
    // {{{ test isNumber#null

    'test isNumber#null': function(){

        // nullテスト
        T_NX.isNumber(null).should.not.equal(true);

    },

    // }}}
    // {{{ test isNumber#string

    'test isNumber#string': function(){

        // 文字列テスト
        T_NX.isNumber('Next JS').should.not.equal(true);

    },

    // }}}
    // {{{ test isNumber#number

    'test isNumber#number': function(){

        // 数値テスト
        T_NX.isNumber(8124).should.equal(true);

    },

    // }}}
    // {{{ test isNumber#boolean

    'test isNumber#boolean': function(){

        // 真偽値テスト
        T_NX.isNumber(true).should.not.equal(true);
        T_NX.isNumber(false).should.not.equal(true);

    },

    // }}}
    // {{{ test isNumber#object

    'test isNumber#object': function(){

        // オブジェクトテスト
        T_NX.isNumber({}).should.not.equal(true);

    },

    // }}}
    // {{{ test isNumber#array

    'test isNumber#array': function(){

        // 配列オブジェクトテスト
        T_NX.isNumber([]).should.not.equal(true);

    },

    // }}}
    // {{{ test isNumber#function

    'test isNumber#function': function(){

        // 関数オブジェクトテスト
        T_NX.isNumber((function(){})).should.not.equal(true);

    },

    // }}}
    // {{{ test isNumber#date

    'test isNumber#date': function(){

        // 日付オブジェクトテスト
        T_NX.isNumber(new Date()).should.not.equal(true);

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
