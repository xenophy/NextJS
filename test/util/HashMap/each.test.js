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
// {{{ each

module.exports = {

    // {{{ test each#pattern1

    'test each#pattern1': function() {

        var hm = new NX.util.HashMap();

        hm.add('key1', 'value1');
        hm.add(123);

        hm.each(function(key, v, len, i) {

            if(i === 0) {
                key.should.equal('key1');
                v.should.equal('value1');
            } else if(i === 1) {
                key.should.equal('undefined');
                v.should.equal(123);
            }

        });

    },

    // }}}
    // {{{ test each#pattern2

    'test each#pattern2': function() {

        var hm = new NX.util.HashMap();

        hm.add('key1', 'value1');
        hm.add('key2', 'value2');
        hm.add('key3', 'value3');
        hm.add('key4', 'value4');
        hm.add('key5', 'value5');

        var count = 0;
        hm.each(function(key, v, len, i) {
            if(i === 3) {
                return false;
            }
            count++;
        });

        count.should.equal(3);

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
