/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

require('should');
var assert = require('assert');

var T_UTIL_DelayedTask = require('NX/core/util/DelayedTask');

// }}}
// {{{ cancel

module.exports = {

    // {{{ test cancel#pattern1

    'test cancel#pattern1': function(beforeExit) {

        var flag = true;
        var dt = new T_UTIL_DelayedTask(function() {
            flag = false;
        });

        dt.delay(100);
        dt.cancel();

        beforeExit(function() {
            flag.should.be.ok;
        });

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
