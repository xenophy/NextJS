/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires


var NX = require('NX/NX.js'),
    assert = require('assert');

NX.util = {};
NX.util.Events = require('NX/util/Events.js');

// }}}
// {{{ NX.util.Events Class Tests

module.exports = {

    // {{{ test constructor#standard

    'test constructor#standard': function() {

        var ev1, ev2;

        var events = new NX.util.Events({
            listeners: {
                'ev1' : function() {
                    ev1 = true;
                },
                'ev2' : function() {
                    ev2 = true;
                }
            }
        });

        events.emit('ev1');
        events.emit('ev2');

        assert.equal(ev1, true);
        assert.equal(ev2, true);

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
