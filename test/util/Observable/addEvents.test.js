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
// {{{ addEvents

module.exports = {

    // {{{ test addEvenets#pattern1

    'test addEvents#pattern1': function() {

        var obs = new NX.util.Observable();

        obs.addEvents('event1', 'event2');

        assert.equal(obs.events['event1'], true);
        assert.equal(obs.events['event2'], true);

        obs.addEvents({
            'event3': true,
            'event4': false
        });

        assert.equal(obs.events['event3'], true);
        assert.equal(obs.events['event4'], false);

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
