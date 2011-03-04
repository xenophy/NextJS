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
// {{{ fireEvent

module.exports = {

    // {{{ test fireEvent#pattern1

    'test fireEvent#pattern1': function() {

        var ret;
        var obs = new NX.util.Observable();

        obs.addEvents('event1');

        obs.addListener('event1', function() {
            ret = 'fired1';
        });

        obs.addListener('event1', function() {
            ret = 'fired2';
            return false;
        });

        obs.addListener('event1', function() {
            ret = 'fired3';
        });

        obs.fireEvent('event1');

        assert.equal(ret, 'fired2');

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
