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

    // {{{ test toArray#standard

    'test toArray#standard': function() {

        var ret;
        var arr = [1,2,3,4,5];

        ret = NX.toArray(arr, 2, 4);

        assert.equal(ret.length, 2);
        assert.equal(ret[0], 3);
        assert.equal(ret[1], 4);

        ret = NX.toArray('abc');
        assert.equal(ret[0], 'a');
        assert.equal(ret[1], 'b');
        assert.equal(ret[2], 'c');

        ret = NX.toArray('abc', 1, 2);
        assert.equal(ret[0], 'b');

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
