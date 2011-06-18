/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.Function

/**
 * @class NX.Function
 */
NX.Function = {

    // {{{ flexSetter

    flexSetter: function(fn) {

        return function(a, b) {

            var k, i;

            if (a === null) {
                return this;
            }

            if (typeof a !== 'string') {
                for (k in a) {
                    if (a.hasOwnProperty(k)) {
                        fn.call(this, k, a[k]);
                    }
                }

            } else {
                fn.call(this, a, b);
            }

            return this;
        };
    },

    // }}}
    // {{{ bind

    bind: function(fn, scope, args, appendArgs) {

        var method = fn,
            slice = Array.prototype.slice;

        return function() {

            var callArgs = args || arguments;

            if (appendArgs === true) {

                callArgs = slice.call(arguments, 0);
                callArgs = callArgs.concat(args);

            } else if (NX.isNumber(appendArgs)) {

                callArgs = slice.call(arguments, 0);
                NX.Array.insert(callArgs, appendArgs, args);

            }

            return method.apply(scope || global, callArgs);
        };
    },

    // }}}
    // {{{ pass

    pass: function(fn, args, scope) {

        if (args) {
            args = NX.Array.from(args);
        } else {
            args = [];
        }

        return function() {
            return fn.apply(scope, args.concat(NX.Array.toArray(arguments)));
        };
    },

    // }}}
    // {{{ alias

    alias: function(object, methodName) {
        return function() {
            return object[methodName].apply(object, arguments);
        };
    },

    // }}}
    // {{{ createInterceptor

    createInterceptor: function(origFn, newFn, scope, returnValue) {
        var method = origFn;
        if (!NX.isFunction(newFn)) {
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
    // {{{ createDelayed

    createDelayed: function(fn, delay, scope, args, appendArgs) {
        if (scope || args) {
            fn = NX.Function.bind(fn, scope, args, appendArgs);
        }
        return function() {
            var me = this;
            setTimeout(function() {
                fn.apply(me, arguments);
            }, delay);
        };
    },

    // }}}
    // {{{ defer

    defer: function(fn, millis, obj, args, appendArgs) {
        fn = NX.Function.bind(fn, obj, args, appendArgs);
        if (millis > 0) {
            return setTimeout(fn, millis);
        }
        fn();
        return 0;
    },

    // }}}
    // {{{ createSequence

    createSequence: function(origFn, newFn, scope) {
        if (!NX.isFunction(newFn)) {
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
        return function(){
            var timerId;
            return function() {
                var me = this;
                if (timerId) {
                    clearInterval(timerId);
                    timerId = null;
                }
                timerId = setTimeout(function(){
                    fn.apply(scope || me, args || arguments);
                }, buffer);
            };
        }();
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
