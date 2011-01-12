/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.util.Event

/**
 * イベントクラス
 */
NX.util.Event = NX.extend(Object, (function() {

    // {{{ createBuffered

    function createBuffered(handler, listener, o, scope) {

        listener.task = new NX.util.DelayedTask();

        return function() {
            listener.task.delay(o.buffer, handler, scope, NX.toArray(arguments));
        };

    };

    // }}}
    // {{{ createDelayed

    function createDelayed(handler, listener, o, scope) {

        return function() {

            var task = new NX.util.DelayedTask();

            if(!listener.tasks) {
                listener.tasks = [];
            }

            listener.tasks.push(task);

            task.delay(o.delay || 10, handler, scope, NX.toArray(arguments));
        };
    };

    // }}}
    // {{{ createSingle

    function createSingle(handler, listener, o, scope) {

        return function() {

            listener.ev.removeListener(listener.fn, scope);

            return handler.apply(scope, arguments);

        };
    };

    // }}}
    // {{{ return

    return {

        // {{{ isEvent

        isEvent: true,

        // }}}
        // {{{ constructor

        constructor: function(observable, name) {

            var me = this;

            me.name = name;
            me.observable = observable;
            me.listeners = [];
        },

        // }}}
        // {{{ addListener

        addListener: function(fn, scope, options) {

            var me = this,
                listener;
                scope = scope || me.observable;

            if(!me.isListening(fn, scope)) {

                listener = me.createListener(fn, scope, options);

                if(me.firing) {
                    me.listeners = me.listeners.slice(0);
                }

                me.listeners.push(listener);
            }

        },

        // }}}
        // {{{ createListener

        createListener: function(fn, scope, o) {

            o = o || {};
            scope = scope || this.observable;

            var listener = {
                    fn: fn,
                    scope: scope,
                    o: o,
                    ev: this
                },
                handler = fn;

            if (o.delay) {
                handler = createDelayed(handler, listener, o, scope);
            }
            if (o.buffer) {
                handler = createBuffered(handler, listener, o, scope);
            }
            if (o.single) {
                handler = createSingle(handler, listener, o, scope);
            }

            listener.fireFn = handler;
            return listener;
        },

        // }}}
        // {{{ findListener

        findListener: function(fn, scope) {

            var listeners = this.listeners,
            i = listeners.length,
            listener,
            s;

            while (i--) {
                listener = listeners[i];
                if (listener) {
                    s = listener.scope;
                    if (listener.fn == fn && (s == scope || s == this.observable)) {
                        return i;
                    }
                }
            }

            return - 1;
        },

        // }}}
        // {{{ isListening

        isListening: function(fn, scope) {
            return this.findListener(fn, scope) !== -1;
        },

        // }}}
        // {{{ removeListener

        removeListener: function(fn, scope) {

            var me = this,
                index,
                listener,
                k;

            index = me.findListener(fn, scope);

            if(index != -1) {

                listener = me.listeners[index];

                if(me.firing) {
                    me.listeners = me.listeners.slice(0);
                }

                if(listener.task) {
                    listener.task.cancel();
                    delete listener.task;
                }

                k = listener.tasks && listener.tasks.length;

                if(k) {

                    while(k--) {
                        listener.tasks[k].cancel();
                    }

                    delete listener.tasks;
                }

                me.listeners.splice(index, 1);

                return true;
            }

            return false;
        },

        // }}}
        // {{{ clearListeners

        clearListeners: function() {

            var listeners = this.listeners,
                i = listeners.length;

            while (i--) {
                this.removeListener(listeners[i].fn, listeners[i].scope);
            }

        },

        // }}}
        // {{{ fire

        fire: function() {

            var me = this,
                listeners = me.listeners,
                count = listeners.length,
                i,
                args,
                listener;

            if(count > 0) {

                me.firing = true;

                for(i = 0; i < count; i++) {

                    listener = listeners[i];

                    args = arguments.length ? Array.prototype.slice.call(arguments, 0) : [];

                    if(listener.o) {
                        args.push(listener.o);
                    }

                    if(listener && listener.fireFn.apply(listener.scope || me.observable, args) === false) {
                        return (me.firing = false);
                    }

                }
            }

            me.firing = false;

            return true;
        }

        // }}}

    };

    // }}}

})());

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
