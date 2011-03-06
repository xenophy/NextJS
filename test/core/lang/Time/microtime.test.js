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
var T_Time = require('NX/core/lang/Time');

// }}}
// {{{ microtime

module.exports = {

    // {{{ test microtime#pattern1

    'test microtime#pattern1': function() {

        var ret;

        ret = T_Time.microtime();
        ret = ret.split(' ');
        ret.length.should.equal(2);

    },

    // }}}
    // {{{ test microtime#pattern2

    'test microtime#pattern2': function() {

        var ret;

        ret = T_Time.microtime(true);
        T_NX.isNumber(ret).should.be.ok;

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
