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
// {{{ relayEvents

module.exports = {

    // {{{ test relayEvents#pattern1

    'test relayEvents#pattern1': function() {

        var ret;

        var org = new NX.util.Observable();
        org.addEvents('event1');

        org.on('event1', function() {
        });

        var obs = new NX.util.Observable();
        obs.addEvents('event1');

        obs.on('event1', function() {
            ret = 'fired';
        });

        obs.relayEvents(org, ['event1']);

        org.fireEvent('event1');

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
