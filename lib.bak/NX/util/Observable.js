/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

/**
 * @class NX.util.Observable
 */

// {{{ requires

var NX = require('../NX.js');
    events = require('events').EventEmitter;

// }}}

var Observable = NX.extend(Object, {

    // @private
    isObservable: true,

    // @private
    eventOptionsRe : /^(?:scope|delay|buffer|single|stopEvent|preventDefault|stopPropagation|normalized|args|delegate|element|vertical|horizontal)$/,

    // {{{ constructor

    /**
     * コンストラクタ
     */
    constructor: function(config) {

        var me = this;

        NX.apply(me, config);

        me.events = me.events || {};

        if (me.listeners) {
            me.on(me.listeners);
            delete me.listeners;
        }

        if (me.bubbleEvents) {
            me.enableBubble(me.bubbleEvents);
        }
    },

    // }}}
    // {{{ fireEvent

    /**
     * @method fireEvent
     */
    fireEvent: function() {

        var me = this,
            a = NX.toArray(arguments),
            ename = a[0].toLowerCase(),
            ret = true,
            ev = me.events[ename],
            queue = me.eventQueue,
            parent;

        if(me.eventsSuspended === true) {

            if(queue) {
                queue.push(a);
            }

            return false;

        } else if(ev && NX.isObject(ev) && ev.bubble) {

            if(ev.fire.apply(ev, a.slice(1)) === false) {
                return false;
            }

            parent = me.getBubbleTarget && me.getBubbleTarget();

            if(parent && parent.isObservable) {

                if(
                    !parent.events[ename] ||
                    !NX.isObject(parent.events[ename]) ||
                    !parent.events[ename].bubble
                ) {
                    parent.enableBubble(ename);
                }

                return parent.fireEvent.apply(parent, a);
            }

        } else if(ev && NX.isObject(ev)) {

            a.shift();
            ret = ev.fire.apply(ev, a);
        }

        return ret;
    },

    // }}}
    // {{{ addListener

    /**
     * @method addListener
     */
    addListener: function(ename, fn, scope, o) {

        var me = this,
            config,
            ev;

        if(NX.isObject(ename)) {

            o = ename;

            for(ename in o) {

                config = o[ename];

                if (!me.eventOptionsRe.test(ename)) {
                    me.addListener(ename, config.fn || config, config.scope || o.scope, config.fn ? config : o);
                }
            }


        } else {

            ename = ename.toLowerCase();

            me.events[ename] = me.events[ename] || true;
            ev = me.events[ename] || true;

            if(NX.isBoolean(ev)) {
                me.events[ename] = ev = new NX.util.Event(me, ename);
            }

            ev.addListener(fn, scope, NX.isObject(o) ? o: {});

        }
    },

    // }}}
    // {{{ removeListener

    /**
     * @method removeListener
     */
    removeListener: function(ename, fn, scope) {

        var me = this,
            config,
            ev;

        if(NX.isObject(ename)) {

            var o = ename;

            for(ename in o) {

                config = o[ename];

                if(!me.eventOptionsRe.test(ename)) {
                    me.removeListener(ename, config.fn || config, config.scope || o.scope);
                }
            }

        } else {

            ename = ename.toLowerCase();

            ev = me.events[ename];

            if (ev.isEvent) {
                ev.removeListener(fn, scope);
            }
        }
    },

    // }}}
    // {{{ clearListeners

    /**
     * @method clearListeners
     */
    clearListeners: function() {

        var me = this,
            events = me.events,
            ev,
            key;

        for(key in events) {

            ev = events[key];

            if (ev.isEvent) {
                ev.clearListeners();
            }
        }

    },

    // }}}
    // {{{ addEvents

    /**
     * @method addEvents
     */
    addEvents: function(o) {

        var me = this;
            me.events = me.events || {};

        if(NX.isString(o)) {

            var args = arguments,
            i = args.length;

            while(i--) {
                me.events[args[i]] = me.events[args[i]] || true;
            }

        } else {

            NX.applyIf(me.events, o);

        }
    },

    // }}}
    // {{{ suspendEvents

    /**
     * @method suspendEvents
     */
    suspendEvents: function(queueSuspended) {

        var me = this;

        me.eventsSuspended = true;

        if(queueSuspended && !me.eventQueue) {
            me.eventQueue = [];
        }

    },

    // }}}
    // {{{ resumeEvents

    /**
     * @method resumeEvents
     */
    resumeEvents: function() {

        var me = this,
            queued = me.eventQueue || [];

        me.eventsSuspended = false;
        delete me.eventQueue;

        NX.each(queued, function(e) {
            me.fireEvent.apply(me, e);
        });

    },

    // }}}
    // {{{ relayEvents

    /**
     * @method relayEvents
     */
    relayEvents : function(origin, events, prefix) {

        var me = this,
            len = events.length,
            i,
            ename;

        prefix = prefix || '';

        function createHandler(ename){

            return function() {
                return me.fireEvent.apply(me, [prefix + ename].concat(Array.prototype.slice.call(arguments, 0, -1)));
            };

        }

        for(i = 0, len = events.length; i < len; i++){

            ename = events[i].substr(prefix.length);
            me.events[ename] = me.events[ename] || true;
            origin.on(ename, createHandler(ename), me);

        }

    },

    // }}}
    // {{{ enableBubble

    /**
     * @method enableBubble
     */
    enableBubble: function(events) {

        var me = this;

        if(!NX.isEmpty(events)) {

            events = NX.isArray(events) ? events: NX.toArray(arguments);

            NX.each(events, function(ename) {

                ename = ename.toLowerCase();

                var ce = me.events[ename] || true;

                if(NX.isBoolean(ce)) {

                    ce = new NX.util.Event(me, ename);
                    me.events[ename] = ce;

                }

                ce.bubble = true;
            });

        }
    }

    // }}}

});

// }}}
// {{{ shorthand

Observable.on = Observable.prototype.addListener;
Observable.un = Observable.prototype.removeListener;

module.exports = Observable;

// }}}
// {{{ NX.util.Observable.releaseCapture

/**
 * @method Observable.releaseCapture
 */
module.exports.releaseCapture = function(o) {
    o.fireEvent = Observable.prototype.fireEvent;
};

// }}}
// {{{ NX.util.Observable.capture

/**
 * @method Observable.capture
 */
module.exports.capture = function(o, fn, scope) {
    o.fireEvent = NX.createInterceptor(o.fireEvent, fn, scope);
};

// }}}
// {{{ NX.util.Observable.observe

/**
 * @method Observable.observe
 */
module.exports.observe = function(cls, listeners) {

    if(cls) {

        if(!cls.isObservable) {

            var o = new Observable();
            NX.applyIf(cls, o);

            NX.iterate(Observable.prototype, function(prop, v) {
                cls[prop] = o[prop];
            });

            Observable.capture(cls, cls.fireEvent, cls);
        }

        if(NX.isObject(listeners)) {
            cls.on(listeners);
        }

        return cls;
    }

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
