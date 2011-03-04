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
// {{{ listeners

module.exports = {

    // {{{ test listeners#pattern1

    'test listeners#pattern1': function() {

        var ret1, ret2;

        var obs = new NX.util.Observable({
            listeners: {
                'event1': function() {
                    ret1 = 'fired';
                },
                'event2': function() {
                    ret2 = 'fired';
                }
            }
        });

        obs.fireEvent('event1');
        obs.fireEvent('event2');

        assert.equal(ret1, 'fired');
        assert.equal(ret2, 'fired');

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
