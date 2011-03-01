/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

require('should');
var assert = require('assert');

var T_NX = require('NX/core');
var T_ClassManager = require('NX/core/class/ClassManager');

// }}}
// {{{ create

module.exports = {

    // {{{ test parseNamespace#pattern1

    'test parseNamespace#pattern1': function() {

        try {
            T_ClassManager.parseNamespace({});
        } catch(e) {
            e.message.should.equal('[NX.ClassManager.parseNamespace] namespace must be a string');
        }

    },

    // }}}
    // {{{ test parseNamespace#pattern2

    'test parseNamespace#pattern2': function() {

        var ret = T_ClassManager.parseNamespace('NX.ClassManager');
        assert.equal(ret[0], T_NX);

    },

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
