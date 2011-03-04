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
// {{{ clearListeners

module.exports = {

    // {{{ test clearListeners#pattern1

    'test clearListeners#pattern1': function(beforeExit) {

        var obs = new NX.util.Observable();
        var ret = 0;
        var f = function() {
            ret++;
        };

        obs.addEvents('event1', 'event2', 'event3');

        obs.on('event1', f);
        obs.on('event2', f);
        obs.on('event3', f);

        obs.clearListeners();

        obs.fireEvent('event1');
        obs.fireEvent('event2');
        obs.fireEvent('event3');

        beforeExit(function(){
            assert.equal(ret, 0);
        });

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
