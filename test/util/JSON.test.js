/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

require('NX');
var assert = require('assert');
var should = require('should');

// }}}
// {{{ NX.util.JSON Class Tests

module.exports = {

    // {{{ test JSON#standard

    'test JSON#standard': function() {

        var o = {
            v1: 1234,
            v2: 'string',
            v3: false,
            v4: {
                foo: 'bar'
            }
        };

        var d = NX.util.JSON.encode(o);
        var ret = NX.util.JSON.decode(d);

        assert.equal(ret.v1, 1234);
        assert.equal(ret.v2, 'string');
        assert.equal(ret.v3, false);
        assert.equal(ret.v4.foo, 'bar');

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
