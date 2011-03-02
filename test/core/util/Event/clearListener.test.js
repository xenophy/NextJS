/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

require('should');
var assert = require('assert');

var T_UTIL_Event = require('NX/core/util/Event');

// }}}
// {{{ clearListeners

module.exports = {

    // {{{ test clearListeners#pattern1

    'test clearListeners#pattern1': function(beforeExit) {

        var f = function() {
        };

        var ev = new T_UTIL_Event();

        ev.addListener(f);

        ev.listeners.length.should.equal(1);

        ev.clearListeners();

        ev.listeners.length.should.equal(0);

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
