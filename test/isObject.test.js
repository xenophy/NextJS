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
// {{{ isObject

module.exports = {

    // {{{ test isObject#undefined

    'test isObject#undefined': function(){

        // undefinedテスト
        T_NX.isObject(undefined).should.not.equal(true);

    },

    // }}}
    // {{{ test isObject#null

    'test isObject#null': function(){

        // nullテスト
        T_NX.isObject(null).should.not.equal(true);

    },

    // }}}
    // {{{ test isObject#string

    'test isObject#string': function(){

        // 文字列テスト
        T_NX.isObject('Next JS').should.not.equal(true);

    },

    // }}}
    // {{{ test isObject#number

    'test isObject#number': function(){

        // 数値テスト
        T_NX.isObject(8124).should.not.equal(true);

    },

    // }}}
    // {{{ test isObject#boolean

    'test isObject#boolean': function(){

        // 真偽値テスト
        T_NX.isObject(true).should.not.equal(true);
        T_NX.isObject(false).should.not.equal(true);

    },

    // }}}
    // {{{ test isObject#object

    'test isObject#object': function(){

        // オブジェクトテスト
        T_NX.isObject({}).should.equal(true);

    },

    // }}}
    // {{{ test isObject#array

    'test isObject#array': function(){

        // 配列オブジェクトテスト
        T_NX.isObject([]).should.not.equal(true);

    },

    // }}}
    // {{{ test isObject#function

    'test isObject#function': function(){

        // 関数オブジェクトテスト
        T_NX.isObject((function(){})).should.not.equal(true);

    },

    // }}}
    // {{{ test isObject#date

    'test isObject#date': function(){

        // 日付オブジェクトテスト
        T_NX.isObject(new Date()).should.not.equal(true);

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
