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
// {{{ removeByKey

module.exports = {

    // {{{ test removeByKey#pattern1

    'test removeByKey#pattern1': function() {

        var hm = new NX.util.HashMap();

        hm.add('key1', 'value1');
        hm.add('key2', 'value2');
        hm.add('key3', 'value3');

        hm.removeByKey('key2').should.equal(true);
        hm.getCount().should.equal(2);

    },

    // }}}
    // {{{ test removeByKey#pattern2

    'test removeByKey#pattern2': function() {

        var hm = new NX.util.HashMap();

        hm.add('key1', 'value1');
        hm.add('key2', 'value2');
        hm.add('key3', 'value3');

        hm.removeByKey('key5').should.equal(false);
        hm.getCount().should.equal(3);

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
