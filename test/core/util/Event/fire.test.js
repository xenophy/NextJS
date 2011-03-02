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
// {{{ fire

module.exports = {

    // {{{ test fire#pattern1

    'test fire#pattern1': function(beforeExit) {

        var exec = false;
        var f = function() {
            exec = true;
        };

        var ev = new T_UTIL_Event();

        ev.addListener(f);

        ev.fire();

        exec.should.be.ok;

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
