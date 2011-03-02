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
// {{{ remove

module.exports = {

    // {{{ test remove#pattern1

    'test remove#pattern1': function() {

        var hm = new NX.util.HashMap();

        var data1 = 'value1';
        var data2 = 'value2';

        hm.add('key1', data1);

        hm.remove(data1).should.equal(true);
        hm.remove(data2).should.equal(false);

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
