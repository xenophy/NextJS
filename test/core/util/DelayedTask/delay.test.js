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
// {{{ delay

module.exports = {

    // {{{ test delay#pattern1

    'test delay#pattern1': function() {

        var startTime = new Date();

        var dt = new T_UTIL_DelayedTask(function() {
            var endTime = new Date();
            var msec = endTime - startTime;

            msec.should.be.within(10,1000);
        });

        dt.delay(10);

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
