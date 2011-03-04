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
// {{{ addListener

module.exports = {

    // {{{ test addListener#pattern1

    'test addListener#pattern1': function(beforeExit) {

        var obs = new NX.util.Observable();

        obs.addEvents('event1', 'event2');

        var ret1;
        obs.addListener('event1', function() {
            ret1 = 'fired';
        });
        obs.fireEvent('event1');

        var ret2;
        obs.on('event2', function() {
            ret2 = 'fired';
        });
        obs.fireEvent('event2');

        beforeExit(function(){
            assert.equal(ret1, 'fired');
            assert.equal(ret2, 'fired');
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
