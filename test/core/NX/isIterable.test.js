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
// {{{ isIterable

module.exports = {

    // {{{ test isIterable#array

    'test isIterable#array': function() {

        T_NX.isIterable([]).should.equal(true);
        T_NX.isIterable(['1','2','3']).should.equal(true);

    },

    // }}}
    // {{{ test isIterable#object

    'test isIterable#object': function() {

        // オブジェクトは回せないほうに入る
        T_NX.isIterable({}).should.not.equal(true);
        T_NX.isIterable({foo:'1',bar:'2',hoge:'3'}).should.not.equal(true);

    },

    // }}}
    // {{{ test isIterable#otherwise

    'test isIterable#otherwise': function() {

        // それ以外も回せない
        T_NX.isIterable('Next JS').should.not.equal(true);
        T_NX.isIterable(1234).should.not.equal(true);
        T_NX.isIterable(true).should.not.equal(true);
        T_NX.isIterable(new Date()).should.not.equal(true);
        T_NX.isIterable(function(){}).should.not.equal(true);
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
