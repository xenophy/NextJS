/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

require('NX');
var assert = require('assert');

// }}}
// {{{ NX.util.Observable Class Tests

module.exports = {

    // {{{ test addEvents

    'test addEvents': function() {

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
    // {{{ test addListener/on/fireEvent

    'test addListener/on/fireEvent': function(beforeExit) {

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
    // {{{ test removeListener/un

    'test removeListener/un': function(beforeExit) {

        var obs = new NX.util.Observable();
        var ret = 0;
        var f = function() {
            ret++;
        };

        obs.addEvents('event1');

        obs.on('event1', f);
        obs.fireEvent('event1');
        obs.un('event1', f);
        obs.fireEvent('event1');

        beforeExit(function(){
            assert.equal(ret, 1);
        });

    },

    // }}}
    // {{{ test removeListener

    'test removeListener': function(beforeExit) {

        var ret = null;
        var obs = new NX.util.Observable();
        var ev = {
            event1 : function() {
                ret = 'fired';
            }
        };

        obs.on(ev);
        obs.un(ev);

        beforeExit(function(){
            assert.equal(ret, null);
        });

    },

    // }}}
    // {{{ test clearListener

    'test clearListener': function(beforeExit) {

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
    // {{{ test resumeEvents/suspendEvents

    'test resumeEvents/suspendEvents': function(beforeExit) {

        var obs = new NX.util.Observable();
        var ret = 0;
        var f = function() {
            ret++;
        };

        obs.addEvents('event1');

        obs.on('event1', f);

        obs.suspendEvents();

        obs.fireEvent('event1');

        assert.equal(ret, 0);

        obs.resumeEvents();

        obs.fireEvent('event1');

        assert.equal(ret, 1);

        obs.suspendEvents(true);

        obs.fireEvent('event1');

        assert.equal(ret, 1);

        obs.resumeEvents();

        assert.equal(ret, 2);

    },

    // }}}
    // {{{ test relayEvents

    'test relayEvents': function(beforeExit) {

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
    // {{{ test enableBubble

    'test enableBubble': function(beforeExit) {

        var ret;

        var org = new NX.util.Observable();
        org.addEvents('event1');

        org.on('event1', function() {
            ret = 'fired';
        });

        var obs = new NX.util.Observable();
        obs.addEvents('event1');
        obs.getBubbleTarget = function() {
            return org;
        };
        obs.enableBubble('event1');

        obs.fireEvent('event1');

        assert.equal(ret, 'fired');
    },

    // }}}
    // {{{ test enableBubble stop

    'test enableBubble stop': function(beforeExit) {

        var ret;

        var org = new NX.util.Observable();
        org.addEvents('event1');

        org.on('event1', function() {
            ret = 'org fired';
        });

        var obs = new NX.util.Observable();
        obs.addEvents('event1');
        obs.getBubbleTarget = function() {
            return org;
        };

        obs.on('event1', function() {
            ret = 'obs fired';
            return false;
        });

        obs.enableBubble('event1');

        obs.fireEvent('event1');

        assert.equal(ret, 'obs fired');
    },

    // }}}
    // {{{ test bubbleEvents

    'test bubbleEvents': function(beforeExit) {

        var ret = null;
        var org = new NX.util.Observable();
        org.on('event1', function() {
            ret = 'fired';
        });

        var obs = new NX.util.Observable({
            bubbleEvents : ['event1']
        });
        obs.getBubbleTarget = function() {
            return org;
        };

        obs.fireEvent('event1');

        assert.equal(ret, 'fired');

    },

    // }}}
    // {{{ test listeners

    'test listeners': function() {

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
    // {{{ test fireEvent stop

    'test fireEvent stop': function(beforeExit) {

        var ret;
        var obs = new NX.util.Observable();

        obs.addEvents('event1');

        obs.addListener('event1', function() {
            ret = 'fired1';
        });

        obs.addListener('event1', function() {
            ret = 'fired2';
            return false;
        });

        obs.addListener('event1', function() {
            ret = 'fired3';
        });

        obs.fireEvent('event1');

        assert.equal(ret, 'fired2');

    },

    // }}}
    // {{{ test Observable.capture

    'test Observable.capture': function(beforeExit) {

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
    // {{{ test Observable.observe

    'test Observable.observe': function(beforeExit) {

        var o = {};
        var ret1, ret2;

        NX.util.Observable.observe(o, {
            'event1': function() {
                ret1 = 'fired';
            },
            'event2': function() {
                ret2 = 'fired';
            }
        });

        o.fireEvent('event1');
        o.fireEvent('event2');
        assert.equal(ret1, 'fired');
        assert.equal(ret2, 'fired');

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
