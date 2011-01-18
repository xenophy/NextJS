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
// {{{ NX.util.String Class Tests

module.exports = {

    // {{{ test explode#standard

    'test explode#standard': function() {

        // assert.equal(called.func1, true);

        var str = 'v1,v2,v3,v4,v5';

        var ret = NX.explode(',', str);

        assert.equal(ret[0], 'v1');
        assert.equal(ret[1], 'v2');
        assert.equal(ret[2], 'v3');
        assert.equal(ret[3], 'v4');
        assert.equal(ret[4], 'v5');

        var ret = NX.explode(',');

        assert.equal(NX.isNull(ret), true);

        var ret = NX.explode('', str);

        assert.equal(ret, false);

        var ret = NX.explode(',', function() {});

        assert.equal(ret.length, 0);

        var ret = NX.explode(true, str);
        assert.equal(ret[0], 'v');
        assert.equal(ret[1], ',v2,v3,v4,v5');

        var ret = NX.explode(',', str, 3);
        assert.equal(ret[0], 'v1');
        assert.equal(ret[1], 'v2');
        assert.equal(ret[2], 'v3,v4,v5');

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
