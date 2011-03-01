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
// {{{ isDefine

module.exports = {

    // {{{ test isDefined#undefined

    'test isDefined#undefined': function(){

        // undefinedテスト
        T_NX.isDefined(undefined).should.not.equal(true);

    },

    // }}}
    // {{{ test isDefined#null

    'test isDefined#null': function(){

        // nullテスト
        T_NX.isDefined(null).should.equal(true);

    },

    // }}}
    // {{{ test isDefined#string

    'test isDefined#string': function(){

        // 文字列テスト
        T_NX.isDefined('Next JS').should.equal(true);

    },

    // }}}
    // {{{ test isDefined#number

    'test isDefined#number': function(){

        // 数値テスト
        T_NX.isDefined(8124).should.equal(true);

    },

    // }}}
    // {{{ test isDefined#boolean

    'test isDefined#boolean': function(){

        // 真偽値テスト
        T_NX.isDefined(true).should.equal(true);
        T_NX.isDefined(false).should.equal(true);

    },

    // }}}
    // {{{ test isDefined#object

    'test isDefined#object': function(){

        // オブジェクトテスト
        T_NX.isDefined({}).should.equal(true);

    },

    // }}}
    // {{{ test isDefined#array

    'test isDefined#array': function(){

        // 配列オブジェクトテスト
        T_NX.isDefined([]).should.equal(true);

    },

    // }}}
    // {{{ test isDefined#function

    'test isDefined#function': function(){

        // 関数オブジェクトテスト
        T_NX.isDefined((function(){})).should.equal(true);

    },

    // }}}
    // {{{ test isDefined#date

    'test isDefined#date': function(){

        // 日付オブジェクトテスト
        T_NX.isDefined(new Date()).should.equal(true);

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
