/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

require('should');
var assert = require('assert');

var T_Object = require('NX/Object');

// }}}
// {{{ keyOf

module.exports = {

    // {{{ test keyOf#pattern1

    'test keyOf#pattern1': function() {

        var ret = T_Object.keyOf({foo: 'bar'}, 'bar');
        ret.should.equal('foo');
    },

    // }}}
    // {{{ test keyOf#pattern2

    'test keyOf#pattern2': function() {

        var ret = T_Object.keyOf({foo: 'bar'}, 'hoge');

        assert.equal(ret, null);
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
