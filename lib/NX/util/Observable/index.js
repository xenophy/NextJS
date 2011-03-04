/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ require

var T_NX = require('../../core');
var T_UTIL_Event = require('../../core/util/Event');

// }}}
// {{{ NX.util.Observable

/**
 * @class NX.util.Observable
 */
NX.define('NX.util.Observable', {

    // {{{ statics

    statics: {

        // {{{ releaseCapture

        /**
         * @method releaseCapture
         * @static
         */
        releaseCapture: require('./releaseCapture'),

        // }}}
        // {{{ capture

        /**
         * @method capture
         * @static
         */
        capture: require('./capture'),

        // }}}
        // {{{ observe

        /**
         * @method observe
         * @static
         */
        observe: require('./observe')

        // }}}

    },

    // }}}
    // {{{ isObservable

    /**
     * @prop isObservable
     * @private
     */
    isObservable: true,

    // }}}
    // {{{ eventOptionsRe

    /**
     * @prop
     * @private
     */
    eventOptionsRe : /^(?:scope|delay|buffer|single|stopEvent|preventDefault|stopPropagation|normalized|args|delegate|element|vertical|horizontal)$/,

    // }}}
    // {{{ constructor

    /**
     * @method constructor
     */
    constructor: require('./constructor'),

    // }}}
    // {{{ addManagedListener

    /**
     * @method addManagedListener
     */
    addManagedListener: require('./addManagedListener'),

    // }}}
    // {{{ removeManagedListener

    /**
     * @method removeMethodListener
     */
    removeManagedListener : function(item, ename, fn, scope) {
        var me = this,
            options,
            config,
            managedListeners,
            managedListener,
            length,
            i;

        if (Ext.isObject(ename)) {
            options = ename;
            for (ename in options) {
                if (options.hasOwnProperty(ename)) {
                    config = options[ename];
                    if (!me.eventOptionsRe.test(ename)) {
                        me.removeManagedListener(item, ename, config.fn || config, config.scope || options.scope);
                    }
                }
            }
        }

        managedListeners = me.managedListeners ? me.managedListeners.slice() : [];
        length = managedListeners.length;

        for (i = 0; i < length; i++) {
            managedListener = managedListeners[i];
            if (managedListener.item === item && managedListener.ename === ename && (!fn || managedListener.fn === fn) && (!scope || managedListener.scope === scope)) {
                Ext.Array.remove(me.managedListeners, managedListener);
                item.un(managedListener.ename, managedListener.fn, managedListener.scope);
            }
        }
    },

    // }}}
    // {{{ fireEvent

    /**
     * @method fireEvent
     */
    fireEvent: function() {
        var me = this,
            args = Ext.Array.toArray(arguments),
            ename = args[0].toLowerCase(),
            ret = true,
            event = me.events[ename],
            queue = me.eventQueue,
            parent;

        if (me.eventsSuspended === true) {
            if (queue) {
                queue.push(args);
            }
            return false;
        } else if (event && Ext.isObject(event) && event.bubble) {
            if (event.fire.apply(event, args.slice(1)) === false) {
                return false;
            }
            parent = me.getBubbleTarget && me.getBubbleTarget();
            if (parent && parent.isObservable) {
                if (!parent.events[ename] || !Ext.isObject(parent.events[ename]) || !parent.events[ename].bubble) {
                    parent.enableBubble(ename);
                }
                return parent.fireEvent.apply(parent, args);
            }
        } else if (event && Ext.isObject(event)) {
            args.shift();
            ret = event.fire.apply(event, args);
        }
        return ret;
    },

    // }}}
    // {{{ addListener

    /**
     * @method addListener
     */
    addListener: function(ename, fn, scope, options) {
        var me = this,
            config,
            event;

        if (Ext.isObject(ename)) {
            options = ename;
            for (ename in options) {
                if (options.hasOwnProperty(ename)) {
                    config = options[ename];
                    if (!me.eventOptionsRe.test(ename)) {
                        me.addListener(ename, config.fn || config, config.scope || options.scope, config.fn ? config : options);
                    }
                }
            }
        }
        else {
            ename = ename.toLowerCase();
            me.events[ename] = me.events[ename] || true;
            event = me.events[ename] || true;
            if (Ext.isBoolean(event)) {
                me.events[ename] = event = new Ext.util.Event(me, ename);
            }
            event.addListener(fn, scope, Ext.isObject(options) ? options : {});
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
            event,
            options;

        if (Ext.isObject(ename)) {
            options = ename;
            for (ename in options) {
                if (options.hasOwnProperty(ename)) {
                    config = options[ename];
                    if (!me.eventOptionsRe.test(ename)) {
                        me.removeListener(ename, config.fn || config, config.scope || options.scope);
                    }
                }
            }
        } else {
            ename = ename.toLowerCase();
            event = me.events[ename];
            if (event.isEvent) {
                event.removeListener(fn, scope);
            }
        }
    },

    // }}}
    // {{{ clearListeners

    /**
     * @method clearListeners
     */
    clearListeners: function() {
        var events = this.events,
            event,
            key;

        for (key in events) {
            if (events.hasOwnProperty(key)) {
                event = events[key];
                if (event.isEvent) {
                    event.clearListeners();
                }
            }
        }

        this.clearManagedListeners();
    },

    // }}}
    // {{{ clearManagedListeners

    /**
     * @method clearManagedListeners
     */
    clearManagedListeners : function() {
        var managedListeners = this.managedListeners || [],
            i = 0,
            len = managedListeners.length,
            managedListener;

        for (; i < len; i++) {
            managedListener = managedListeners[i];
            managedListener.item.un(managedListener.ename, managedListener.fn, managedListener.scope);
        }

        this.managedListener = [];
    },

    // }}}
    // {{{ addEvents

    /**
     * @method addEvents
     */
    addEvents: function(o) {
        var me = this,
            args,
            len,
            i;
            
            me.events = me.events || {};
        if (Ext.isString(o)) {
            args = arguments;
            i = args.length;
            
            while (i--) {
                me.events[args[i]] = me.events[args[i]] || true;
            }
        } else {
            Ext.applyIf(me.events, o);
        }
    },

    // }}}
    // {{{ hasListener

    /**
     * @method hasListener
     */
    hasListener: function(ename) {
        var event = this.events[ename.toLowerCase()];
        return event && event.isEvent === true && event.listeners.length > 0;
    },

    // }}}
    // {{{ suspendEvents

    /**
     * @method suspendEvents
     */
    suspendEvents: function(queueSuspended) {
        this.eventsSuspended = true;
        if (queueSuspended && !this.eventQueue) {
            this.eventQueue = [];
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

        Ext.each(queued,
        function(e) {
            me.fireEvent.apply(me, e);
        });
    },

    // }}}
    // {{{ relayEvents

    /**
     * @method relayEvents
     */
    relayEvents : function(origin, events, prefix) {
        prefix = prefix || '';
        var me = this,
            len = events.length,
            i = 0,
            oldName,
            newName;

        for(; i < len; i++){
            oldName = events[i].substr(prefix.length);
            newName = prefix + oldName;
            me.events[newName] = me.events[newName] || true;
            origin.on(oldName, me.createRelayer(newName));
        }
    },

    // }}}
    // {{{ createRelayer

    /**
     * @method createRelayer
     * @private
     */
    createRelayer: function(newName){
        var me = this;
        return function(){
            return me.fireEvent.apply(me, [newName].concat(Array.prototype.slice.call(arguments, 0, -1)));
        };
    },

    // }}}
    // {{{ enableBubble

    /**
     * @method enableBubble
     */
    enableBubble: function(events) {
        var me = this;
        if (!Ext.isEmpty(events)) {
            events = Ext.isArray(events) ? events: Ext.Array.toArray(arguments);
            Ext.each(events,
            function(ename) {
                ename = ename.toLowerCase();
                var ce = me.events[ename] || true;
                if (Ext.isBoolean(ce)) {
                    ce = new Ext.util.Event(me, ename);
                    me.events[ename] = ce;
                }
                ce.bubble = true;
            });
        }
    }

    // }}}

}, function() {

    this.createAlias({

        // {{{ on

        /**
         * @method on
         */
        on: 'addListener',

        // }}}
        // {{{ un

        /**
         * @method un
         */
        un: 'removeListener',

        // }}}
        // {{{ mon

        /**
         * @method mon
         */
        mon: 'addManagedListener',

        // }}}
        // {{{ mun

        /**
         * @method mun
         */
        mun: 'removeManagedListener'

        // }}}

    });

    /*
    T_NX.apply(T_Observable.prototype, function(){
        // this is considered experimental (along with beforeMethod, afterMethod, removeMethodListener?)
        // allows for easier interceptor and sequences, including cancelling and overwriting the return value of the call
        // private
        function getMethodEvent(method){
            var e = (this.methodEvents = this.methodEvents || {})[method],
                returnValue,
                v,
                cancel,
                obj = this;

            if (!e) {
                this.methodEvents[method] = e = {};
                e.originalFn = this[method];
                e.methodName = method;
                e.before = [];
                e.after = [];

                var makeCall = function(fn, scope, args){
                    if((v = fn.apply(scope || obj, args)) !== undefined){
                        if (typeof v == 'object') {
                            if(v.returnValue !== undefined){
                                returnValue = v.returnValue;
                            }else{
                                returnValue = v;
                            }
                            cancel = !!v.cancel;
                        }
                        else
                            if (v === false) {
                                cancel = true;
                            }
                            else {
                                returnValue = v;
                            }
                    }
                };

                this[method] = function(){
                    var args = Array.prototype.slice.call(arguments, 0),
                        b, i, len;
                    returnValue = v = undefined;
                    cancel = false;

                    for(i = 0, len = e.before.length; i < len; i++){
                        b = e.before[i];
                        makeCall(b.fn, b.scope, args);
                        if (cancel) {
                            return returnValue;
                        }
                    }

                    if((v = e.originalFn.apply(obj, args)) !== undefined){
                        returnValue = v;
                    }

                    for(i = 0, len = e.after.length; i < len; i++){
                        b = e.after[i];
                        makeCall(b.fn, b.scope, args);
                        if (cancel) {
                            return returnValue;
                        }
                    }
                    return returnValue;
                };
            }
            return e;
        }

        return {
            // these are considered experimental
            // allows for easier interceptor and sequences, including cancelling and overwriting the return value of the call
            // adds an 'interceptor' called before the original method
            beforeMethod : function(method, fn, scope){
                getMethodEvent.call(this, method).before.push({
                    fn: fn,
                    scope: scope
                });
            },

            // adds a 'sequence' called after the original method
            afterMethod : function(method, fn, scope){
                getMethodEvent.call(this, method).after.push({
                    fn: fn,
                    scope: scope
                });
            },

            removeMethodListener: function(method, fn, scope){
                var e = this.getMethodEvent(method),
                    i, len;
                for(i = 0, len = e.before.length; i < len; i++){
                    if(e.before[i].fn == fn && e.before[i].scope == scope){
                        e.before.splice(i, 1);
                        return;
                    }
                }
                for(i = 0, len = e.after.length; i < len; i++){
                    if(e.after[i].fn == fn && e.after[i].scope == scope){
                        e.after.splice(i, 1);
                        return;
                    }
                }
            },

            toggleEventLogging: function(toggle) {
                Ext.util.Observable[toggle ? 'capture' : 'releaseCapture'](this, function(en) {
                    console.log(en, arguments);
                });
            }
        };
    }());
    */

});

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
