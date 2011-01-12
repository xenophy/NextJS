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

    // {{{ test applyIf#standard

    'test applyIf#standard': function() {

        var src = {
            hoge: 'piyo'
        };

        var ret = NX.applyIf(src, {
            foo: 'bar'
        });

        assert.equal(src, ret, 'Test apply standard return value');
        assert.equal(src.foo, 'bar', 'Test apply standard value bar');
        assert.equal(src.hoge, 'piyo', 'Test apply standard value piyo');
    },

    // }}}
    // {{{ test applyIf#notOverride

    'test applyIf#notOverride': function() {

        var src = {
            foo: 'original'
        };
        var config = {
            foo: 'bar'
        };

        var ret = NX.applyIf(src, config);

        assert.equal(src, ret, 'Test apply defaults return value');
        assert.equal(src.foo, 'original', 'Test apply default key foo');

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
