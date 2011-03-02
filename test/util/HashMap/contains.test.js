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
// {{{ contains

module.exports = {

    // {{{ test contains#pattern1

    'test contains#pattern1': function() {

        var hm = new NX.util.HashMap();

        hm.add('key1', 'value1');
        hm.add('key2', 'value2');
        hm.add('key3', 'value3');

        hm.contains('value1').should.equal(true);
        hm.contains('value2').should.equal(true);
        hm.contains('value3').should.equal(true);
        hm.contains('value4').should.equal(false);

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
