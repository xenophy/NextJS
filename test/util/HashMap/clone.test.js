/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

require('should');
var assert = require('assert');

var T_UTIL_HASHMAP = require('NX/util/HashMap');

// }}}
// {{{ clone

module.exports = {

    // {{{ test clone#pattern1

    'test clone#pattern1': function() {

        var hm1 = new NX.util.HashMap();
        hm1.getCount().should.equal(0);

        hm1.add('key1', 'value1');

        hm1.getCount().should.equal(1);

        var hm2 = hm1.clone();

        hm2.getCount().should.equal(1);

        hm1.clear();

        hm1.getCount().should.equal(0);
        hm2.getCount().should.equal(1);

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
