/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * xFramework NX
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

require('NX');
var assert = require('assert');

// }}}
// {{{ NX Class Tests

module.exports = {

    // {{{ test apply#standard

    'test apply#standard': function() {

        var src = {};

        var ret = NX.apply(src, {
            foo: 'bar'
        });

        assert.equal(src, ret, 'Test apply standard return value');
        assert.equal(src.foo, 'bar', 'Test apply standard');
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

        var ret = NX.apply(src, config, defaults);

        assert.equal(src, ret, 'Test apply defaults return value');
        assert.equal(src.foo, 'bar', 'Test apply default key foo');
        assert.equal(src.hoge, 'piyo', 'Test apply default key hoge');

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
