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
// {{{ findKey

module.exports = {

    // {{{ test findKey#pattern1

    'test findKey#pattern1': function() {

        var hm = new NX.util.HashMap();

        hm.add('key1', 'value1');
        hm.add('key2', 'value1');

        hm.findKey('value1').should.equal('key1');

    },

    // }}}
    // {{{ test findKey#pattern2

    'test findKey#pattern2': function() {

        var hm = new NX.util.HashMap();

        hm.add('key1', 'value1');
        hm.add('key2', 'value1');

        assert.equal(hm.findKey('value2'), undefined);

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
