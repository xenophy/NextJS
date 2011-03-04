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
// {{{ capture

module.exports = {

    // {{{ test capture#pattern1

    'test capture#pattern1': function() {

        var ret1, ret2;
        var obs = new NX.util.Observable({
            listeners : {
                'event1' : function() {
                },
                'event2' : function(a,b,c) {
                }
            }
        });

        NX.util.Observable.capture(obs, function(event) {
            if(event == 'event1') {
                ret1 = 'fired';
            } else if(event == 'event2') {
                ret2 = 'fired';
            }
        });

        obs.fireEvent('event1');
        obs.fireEvent('event2');
        assert.equal(ret1, 'fired');
        assert.equal(ret2, 'fired');

        ret1 = null;
        ret2 = null;

        NX.util.Observable.releaseCapture(obs);

        obs.fireEvent('event1');
        obs.fireEvent('event2');
        assert.equal(ret1, null);
        assert.equal(ret2, null);

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
