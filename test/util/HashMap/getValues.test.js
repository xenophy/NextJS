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
// {{{ getValues

module.exports = {

    // {{{ test getValues#pattern1

    'test getValues#pattern1': function() {

        var hm = new NX.util.HashMap();

        hm.add('key1', 'value1');
        hm.add(123);

        var ret = hm.getValues();
        ret.length.should.equal(2);
        ret[0].should.equal('value1');
        ret[1].should.equal(123);

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
