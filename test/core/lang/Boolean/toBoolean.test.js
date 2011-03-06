/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

require('should');
var assert = require('assert');

var T_Boolean = require('NX/core/lang/Boolean');

// }}}
// {{{ toBoolean

module.exports = {

    // {{{ test toBoolean#pattern1

    'test toBoolean#pattern1': function() {

        var ret;

        ret = T_Boolean.toBoolean('y');
        ret.should.equal(true);
    },

    // }}}
    // {{{ test toBoolean#pattern2

    'test toBoolean#pattern2': function() {

        var ret;

        ret = T_Boolean.toBoolean('yes');
        ret.should.equal(true);
    },

    // }}}
    // {{{ test toBoolean#pattern3

    'test toBoolean#pattern3': function() {

        var ret;

        ret = T_Boolean.toBoolean({});
        ret.should.equal(true);
    },

    // }}}
    // {{{ test toBoolean#pattern4

    'test toBoolean#pattern4': function() {

        var ret;

        ret = T_Boolean.toBoolean(null);
        ret.should.equal(false);
    },

    // }}}
    // {{{ test toBoolean#pattern5

    'test toBoolean#pattern5': function() {

        var ret;

        ret = T_Boolean.toBoolean(undefined);
        ret.should.equal(false);
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
