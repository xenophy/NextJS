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
// {{{ replace

module.exports = {

    // {{{ test replace#pattern1

    'test replace#pattern1': function() {

        var hm = new NX.util.HashMap();

        hm.add('key1', 'value1');

        hm.get('key1').should.equal('value1');

        hm.replace('key1', 'replace1');

        hm.get('key1').should.equal('replace1');

    },

    // }}}
    // {{{ test replace#pattern2

    'test replace#pattern2': function() {

        var hm = new NX.util.HashMap();

        hm.add('key1', 'value1');

        hm.get('key1').should.equal('value1');

        hm.replace('key2', 'replace1');

        hm.get('key1').should.equal('value1');
        hm.get('key2').should.equal('replace1');

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
