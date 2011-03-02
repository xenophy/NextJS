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
// {{{ add

module.exports = {

    // {{{ test add#pattern1

    'test add#pattern1': function() {

        var hm = new NX.util.HashMap();

        var ret = hm.add('key1', 'value1');

        hm.getCount().should.equal(1);
        ret.should.equal('value1');

    },

    // }}}
    // {{{ test add#pattern2

    'test add#pattern2': function() {

        var hm = new NX.util.HashMap();

        var ret = hm.add('foo');

        hm.getCount().should.equal(1);
        ret.should.equal('foo');

    },

    // }}}
    // {{{ test add#pattern3

    'test add#pattern3': function() {

        var hm = new NX.util.HashMap();

        hm.add('key1', 'value1');
        hm.getCount().should.equal(1);

        try {
            hm.add('key1', 'value2');
        } catch(e) {
            e.message.should.equal('This key already exists in the HashMap');
        }
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
