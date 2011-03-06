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
// {{{ hasListener

module.exports = {

    // {{{ test hasListener#pattern1

    'test hasListener#pattern1': function() {

        var obs = new NX.util.Observable();

        obs.addEvents('event1', 'event2');
        obs.addListener('event1', function() {
            ret1 = 'fired';
        });

        obs.hasListener('event1').should.be.ok;
        obs.hasListener('event2').should.be.not.ok;

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
