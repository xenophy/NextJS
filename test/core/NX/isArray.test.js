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
// {{{ isArray

module.exports = {

    // {{{ test isArray#string

    'test isArray#string': function(){

        // 文字列テスト
        T_NX.isArray('Next JS').should.not.equal(true);

    },

    // }}}
    // {{{ test isArray#number

    'test isArray#number': function(){

        // 数値テスト
        T_NX.isArray(8124).should.not.equal(true);

    },

    // }}}
    // {{{ test isArray#boolean

    'test isArray#boolean': function(){

        // 真偽値テスト
        T_NX.isArray(true).should.not.equal(true);
        T_NX.isArray(false).should.not.equal(true);

    },

    // }}}
    // {{{ test isArray#object

    'test isArray#object': function(){

        // オブジェクトテスト
        T_NX.isArray({}).should.not.equal(true);

    },

    // }}}
    // {{{ test isArray#array

    'test isArray#array': function(){

        // 配列オブジェクトテスト
        T_NX.isArray([]).should.not.equal(false);

    },

    // }}}
    // {{{ test isArray#function

    'test isArray#function': function(){

        // 関数オブジェクトテスト
        T_NX.isArray((function(){})).should.not.equal(true);
        T_NX.isArray((function(){})).should.not.equal(true);

    },

    // }}}
    // {{{ test isArray#date

    'test isArray#date': function(){

        // 日付オブジェクトテスト
        T_NX.isArray(new Date()).should.not.equal(true);

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
