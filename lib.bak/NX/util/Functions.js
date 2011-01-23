/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.util.Functions

/**
 * @class NX.util.Functions
 */
NX.util.Functions = {

    // {{{ createInterceptor

    /**
     * @method createInterceptor
     */
    createInterceptor: function(origFn, newFn, scope) {

        var method = origFn;

        if(!NX.isFunction(newFn)) {

            return origFn;

        } else {

            return function() {
                var me = this,
                    args = arguments;

                newFn.target = me;
                newFn.method = origFn;

                return (newFn.apply(scope || me || global, args) !== false) ?
                        origFn.apply(me || global, args) :
                        null;
            };

        }
    },

    // }}}
    // {{{ createDelegate

    /**
     * @method createDelegate
     */
    createDelegate: function(fn, obj, args, appendArgs) {

        if(!NX.isFunction(fn)) {
            return fn;
        }

        return function() {

            var callArgs = args || arguments;

            if(appendArgs === true) {

                callArgs = Array.prototype.slice.call(arguments, 0);
                callArgs = callArgs.concat(args);

            } else if (NX.isNumber(appendArgs)) {

                callArgs = Array.prototype.slice.call(arguments, 0);
                var applyArgs = [appendArgs, 0].concat(args);
                Array.prototype.splice.apply(callArgs, applyArgs);

            }

            return fn.apply(obj || global, callArgs);
        };

    },

    // }}}
    // {{{ defer

    /**
     * @method defer
     */
    defer: function(fn, millis, obj, args, appendArgs) {

        fn = NX.util.Functions.createDelegate(fn, obj, args, appendArgs);

        if(millis > 0) {
            return setTimeout(fn, millis);
        }

        fn();

        return 0;
    },

    // }}}
    // {{{ createSequence

    /**
     * @method createSequence
     */
    createSequence: function(origFn, newFn, scope) {

        if(!NX.isFunction(newFn)) {

            return origFn;

        } else {

            return function() {

                var retval = origFn.apply(this || global, arguments);
                newFn.apply(scope || this || global, arguments);
                return retval;

            };
        }
    }

    // }}}

};

// }}}
// {{{ NX class shorthand

/**
 * @class NX
 */

// {{{ defer

/**
 * @method defer
 */
NX.defer = NX.util.Functions.defer;

// }}}
// {{{ createInterceptor

/**
 * @method createInterceptor
 */
NX.createInterceptor = NX.util.Functions.createInterceptor;

// }}}
// {{{ createSequence

/**
 * @method createSequence
 */
NX.createSequence = NX.util.Functions.createSequence;

// }}}
// {{{ createDelegate

/**
 * @method createDelegate
 */
NX.createDelegate = NX.util.Functions.createDelegate;

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
