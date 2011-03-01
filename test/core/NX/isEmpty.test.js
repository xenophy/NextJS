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
// {{{ isEmpty

module.exports = {

    // {{{ test isEmpty#undefined

    'test isEmpty#undefined': function(){

        // undefinedテスト
        T_NX.isEmpty(undefined).should.equal(true);

    },

    // }}}
    // {{{ test isEmpty#null

    'test isEmpty#null': function(){

        // nullテスト
        T_NX.isEmpty(null).should.equal(true);

    },

    // }}}
    // {{{ test isEmpty#string

    'test isEmpty#string': function(){

        T_NX.isEmpty('').should.equal(true);
        T_NX.isEmpty('', true).should.not.equal(true);
        T_NX.isEmpty('Next JS').should.not.equal(true);

    },

    // }}}
    // {{{ test isEmpty#number

    'test isEmpty#number': function(){

        T_NX.isEmpty(0).should.not.equal(true);
        T_NX.isEmpty(8124).should.not.equal(true);

    },

    // }}}
    // {{{ test isEmpty#boolean

    'test isEmpty#boolean': function(){

        T_NX.isEmpty(true).should.not.equal(true);
        T_NX.isEmpty(false).should.not.equal(true);

    },

    // }}}
    // {{{ test isEmpty#object

    'test isEmpty#object': function(){

        T_NX.isEmpty({}).should.not.equal(true);

    },

    // }}}
    // {{{ test isEmpty#array

    'test isEmpty#array': function(){

        T_NX.isEmpty([]).should.equal(true);
        T_NX.isEmpty([0, 1, 2]).should.not.equal(true);

    },

    // }}}
    // {{{ test isEmpty#function

    'test isEmpty#function': function(){

        T_NX.isEmpty(function(){}).should.not.equal(true);

    },

    // }}}
    // {{{ test isEmpty#date

    'test isEmpty#date': function(){

        // 日付オブジェクトテスト
        T_NX.isEmpty(new Date()).should.not.equal(true);

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
