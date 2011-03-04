/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

require('should');
var assert = require('assert');

var T_UTIL_Observable = require('NX/util/Observable');

// }}}
// {{{ bubbleEvents

module.exports = {

    // {{{ test bubbleEvents#pattern1

    'test bubbleEvents#pattern1': function() {

        var ret = null;
        var org = new NX.util.Observable();
        org.on('event1', function() {
            ret = 'fired';
        });

        var obs = new NX.util.Observable({
            bubbleEvents : ['event1']
        });
        obs.getBubbleTarget = function() {
            return org;
        };

        obs.fireEvent('event1');

        assert.equal(ret, 'fired');

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
