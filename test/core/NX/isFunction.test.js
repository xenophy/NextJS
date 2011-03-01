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
// {{{ isFunction

module.exports = {

    // {{{ test isFunction#undefined

    'test isFunction#undefined': function(){

        // undefinedテスト
        T_NX.isFunction(undefined).should.not.equal(true);

    },

    // }}}
    // {{{ test isFunction#null

    'test isFunction#null': function(){

        // nullテスト
        T_NX.isFunction(null).should.not.equal(true);

    },

    // }}}
    // {{{ test isFunction#string

    'test isFunction#string': function(){

        // 文字列テスト
        T_NX.isFunction('Next JS').should.not.equal(true);

    },

    // }}}
    // {{{ test isFunction#number

    'test isFunction#number': function(){

        // 数値テスト
        T_NX.isFunction(8124).should.not.equal(true);

    },

    // }}}
    // {{{ test isFunction#boolean

    'test isFunction#boolean': function(){

        // 真偽値テスト
        T_NX.isFunction(true).should.not.equal(true);
        T_NX.isFunction(false).should.not.equal(true);

    },

    // }}}
    // {{{ test isFunction#object

    'test isFunction#object': function(){

        // オブジェクトテスト
        T_NX.isFunction({}).should.not.equal(true);

    },

    // }}}
    // {{{ test isFunction#array

    'test isFunction#array': function(){

        // 配列オブジェクトテスト
        T_NX.isFunction([]).should.not.equal(true);

    },

    // }}}
    // {{{ test isFunction#function

    'test isFunction#function': function(){

        // 関数オブジェクトテスト
        T_NX.isFunction((function(){})).should.equal(true);

    },

    // }}}
    // {{{ test isFunction#date

    'test isFunction#date': function(){

        // 日付オブジェクトテスト
        T_NX.isFunction(new Date()).should.not.equal(true);

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
