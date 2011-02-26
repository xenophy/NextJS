/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ require

// }}}
// {{{ NX.Function

/**
 * @class NX.Function
 */
var T_Function = module.exports = {

    // {{{ flexSetter

    /**
     * @method flexSetter
     */
    flexSetter: function(fn) {
        return function(a, b) {
            var k, i, me = this;

            if(a === null) {
                return me;
            }

            if(typeof a !== 'string') {

                for(k in a) {
                    if(a.hasOwnProperty(k)) {
                        fn.call(me, k, a[k]);
                    }
                }

            } else {
                fn.call(me, a, b);
            }

            return me;
        };
    },

    // }}}
    // {{{ bind

    /**
     * @method bind
     */
    bind: function(fn, scope, args, appendArgs) {
        var method = fn,
            applyArgs;

        return function() {
            var callArgs = args || arguments;
            if (appendArgs === true) {
                callArgs = Array.prototype.slice.call(arguments, 0);
                callArgs = callArgs.concat(args);
            } else if (Ext.isNumber(appendArgs)) {
                callArgs = Array.prototype.slice.call(arguments, 0); // copy arguments first
                applyArgs = [appendArgs, 0].concat(args); // create method call params
                Array.prototype.splice.apply(callArgs, applyArgs); // splice them in
            }

            return method.apply(scope || window, callArgs);
        };
    },

    // }}}
    // {{{ pass

    pass: function(fn, args, scope) {
        if (args) {
            args = Ext.Array.from(args);
        }

        return function() {
            return fn.apply(scope, args || arguments);
        };
    },

    // }}}
    // {{{ alias

    /**
     * @method alias
     */
    alias: function(o, name) {
        return function() {
            return o[name].apply(o, arguments);
        };
    },

    // }}}
    // {{{ createInterceptor

    createInterceptor: function(origFn, newFn, scope, returnValue) {
        var method = origFn;
        if (!Ext.isFunction(newFn)) {
            return origFn;
        }
        else {
            return function() {
                var me = this,
                    args = arguments;
                newFn.target = me;
                newFn.method = origFn;
                return (newFn.apply(scope || me || window, args) !== false) ? origFn.apply(me || window, args) : returnValue || null;
            };
        }
    },

    // }}}
    // {{{ defer

    defer: function(fn, millis, obj, args, appendArgs) {
        fn = Ext.Function.bind(fn, obj, args, appendArgs);
        if (millis > 0) {
            return setTimeout(fn, millis);
        }
        fn();
        return 0;
    },

    // }}}
    // {{{ createSequence

    createSequence: function(origFn, newFn, scope) {
        if (!Ext.isFunction(newFn)) {
            return origFn;
        }
        else {
            return function() {
                var retval = origFn.apply(this || window, arguments);
                newFn.apply(scope || this || window, arguments);
                return retval;
            };
        }
    },

    // }}}
    // {{{ createBuffered

    createBuffered: function(fn, buffer, scope, args) {
        var task = fn.task || (fn.task = new Ext.util.DelayedTask());
        return Ext.apply(function() {
            task.delay(buffer, fn, scope || this, args || Ext.toArray(arguments));
        }, task);
    },

    // }}}
    // {{{ createThrottled

    createThrottled: function(fn, interval, scope) {
        var lastCallTime, elapsed, lastArgs, timer, execute = function() {
            fn.apply(scope || this, lastArgs);
            lastCallTime = new Date().getTime();
        };

        return function() {
            elapsed = new Date().getTime() - lastCallTime;
            lastArgs = arguments;

            clearTimeout(timer);
            if (!lastCallTime || (elapsed >= interval)) {
                execute();
            } else {
                timer = setTimeout(execute, interval - elapsed);
            }
        };
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