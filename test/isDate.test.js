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
// {{{ isDate

module.exports = {

    // {{{ test isDate#undefined

    'test isDate#undefined': function(){

        // undefinedテスト
        T_NX.isDate(undefined).should.not.equal(true);

    },

    // }}}
    // {{{ test isDate#null

    'test isDate#null': function(){

        // nullテスト
        T_NX.isDate(null).should.not.equal(true);

    },

    // }}}
    // {{{ test isDate#string

    'test isDate#string': function(){

        // 文字列テスト
        T_NX.isDate('Next JS').should.not.equal(true);

    },

    // }}}
    // {{{ test isDate#number

    'test isDate#number': function(){

        // 数値テスト
        T_NX.isDate(8124).should.not.equal(true);

    },

    // }}}
    // {{{ test isDate#boolean

    'test isDate#boolean': function(){

        // 真偽値テスト
        T_NX.isDate(true).should.not.equal(true);
        T_NX.isDate(false).should.not.equal(true);

    },

    // }}}
    // {{{ test isDate#object

    'test isDate#object': function(){

        // オブジェクトテスト
        T_NX.isDate({}).should.not.equal(true);

    },

    // }}}
    // {{{ test isDate#array

    'test isDate#array': function(){

        // 配列オブジェクトテスト
        T_NX.isDate([]).should.not.equal(true);

    },

    // }}}
    // {{{ test isDate#function

    'test isDate#function': function(){

        // 関数オブジェクトテスト
        T_NX.isDate((function(){})).should.not.equal(true);

    },

    // }}}
    // {{{ test isDate#date

    'test isDate#date': function(){

        // 日付オブジェクトテスト
        T_NX.isDate(new Date()).should.equal(true);

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
