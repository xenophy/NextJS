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

    // {{{ test each#standard

    'test each#standard': function() {

        var tmp = [];
        var ret = T_NX.each([1,2,3,4,5], function(v) {
            tmp.push(v);
        });

        tmp.length.should.equal(5);

    },

    // }}}
    // {{{ test each#empty

    'test each#empty': function() {

        var ret = T_NX.each(undefined, function() {});

        assert.ok(!ret, 'Test each returns undefined');

    },

    // }}}
    // {{{ test each#notIterable

    'test each#notIterable': function() {

        var ret = T_NX.each('Next JS', function(v) {
            v.should.equal('Next JS');
        });

    },

    // }}}
    // {{{ test each#primitive

    'test each#primitive': function() {

        var ret = T_NX.each(8124, function(v) {
            v.should.equal(8124);
        });

    },

    // }}}
    // {{{ test each#callbackFalse

    'test each#callbackFalse': function() {

        var tmp = [];
        var ret = T_NX.each([1,2,3,4,5], function(v) {
            tmp.push(v);
            if(v === 3) {
                return false;
            }
        });

        tmp.length.should.equal(3);

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
