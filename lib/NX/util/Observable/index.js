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
    removeManagedListener: require('./removeManagedListener'),

    // }}}
    // {{{ fireEvent

    /**
     * @method fireEvent
     */
    fireEvent: require('./fireEvent'),

    // }}}
    // {{{ addListener

    /**
     * @method addListener
     */
    addListener: require('./addListener'),

    // }}}
    // {{{ removeListener

    /**
     * @method removeListener
     */
    removeListener: require('./removeListener'),

    // }}}
    // {{{ clearListeners

    /**
     * @method clearListeners
     */
    clearListeners: require('./clearListeners'),

    // }}}
    // {{{ clearManagedListeners

    /**
     * @method clearManagedListeners
     */
    clearManagedListeners: require('./clearManagedListeners'),

    // }}}
    // {{{ addEvents

    /**
     * @method addEvents
     */
    addEvents: require('./addEvents'),

    // }}}
    // {{{ hasListener

    /**
     * @method hasListener
     */
    hasListener: require('./hasListener'),

    // }}}
    // {{{ relayEvents

    /**
     * @method relayEvents
     */
    relayEvents : require('./relayEvents'),

    // }}}
    // {{{ createRelayer

    /**
     * @method createRelayer
     * @private
     */
    createRelayer: require('./createRelayer'),

    // }}}
    // {{{ enableBubble

    /**
     * @method enableBubble
     */
    enableBubble: require('./enableBubble')

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
