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
// {{{ apply

module.exports = {

    // {{{ test isBoolean#undefined

    'test isBoolean#undefined': function(){

        // undefinedテスト
        T_NX.isBoolean(undefined).should.not.equal(true);

    },

    // }}}
    // {{{ test isBoolean#null

    'test isBoolean#null': function(){

        // nullテスト
        T_NX.isBoolean(null).should.not.equal(true);

    },

    // }}}
    // {{{ test isBoolean#string

    'test isBoolean#string': function(){

        // 文字列テスト
        T_NX.isBoolean('Next JS').should.not.equal(true);

    },

    // }}}
    // {{{ test isBoolean#number

    'test isBoolean#number': function(){

        // 数値テスト
        T_NX.isBoolean(8124).should.not.equal(true);

    },

    // }}}
    // {{{ test isBoolean#boolean

    'test isBoolean#boolean': function(){

        // 真偽値テスト
        T_NX.isBoolean(true).should.equal(true);
        T_NX.isBoolean(false).should.equal(true);

    },

    // }}}
    // {{{ test isBoolean#object

    'test isBoolean#object': function(){

        // オブジェクトテスト
        T_NX.isBoolean({}).should.not.equal(true);

    },

    // }}}
    // {{{ test isBoolean#array

    'test isBoolean#array': function(){

        // 配列オブジェクトテスト
        T_NX.isBoolean([]).should.not.equal(true);

    },

    // }}}
    // {{{ test isBoolean#function

    'test isBoolean#function': function(){

        // 関数オブジェクトテスト
        T_NX.isBoolean((function(){})).should.not.equal(true);

    },

    // }}}
    // {{{ test isBoolean#date

    'test isBoolean#date': function(){

        // 日付オブジェクトテスト
        T_NX.isBoolean(new Date()).should.not.equal(true);

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
