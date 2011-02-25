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

    // {{{ test apply#standard

    'test apply#standard': function() {

        var src = {};
        var ret = T_NX.apply(src, {
            foo: 'bar'
        });

        src.should.equal(ret);
        src.foo.should.equal('bar');
    },

    // }}}
    // {{{ test apply#defaults

    'test apply#defaults': function() {

        var src = {};
        var config = {
            foo: 'bar'
        };
        var defaults = {
            foo: 'default value',
            hoge: 'piyo'
        };

        var ret = T_NX.apply(src, config, defaults);

        src.should.equal(ret);
        src.foo.should.equal('bar');
        src.hoge.should.equal('piyo');

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
