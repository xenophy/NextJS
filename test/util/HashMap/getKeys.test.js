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
// {{{ getKeys

module.exports = {

    // {{{ test getKeys#pattern1

    'test getKeys#pattern1': function() {

        var hm = new NX.util.HashMap();

        hm.add('key1', 'value1');
        hm.add('key2', 'value2');
        hm.add('key3', 'value3');

        var ret = hm.getKeys();

        ret.length.should.equal(3);
        ret[0].should.equal('key1');
        ret[1].should.equal('key2');
        ret[2].should.equal('key3');

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
