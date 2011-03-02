/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires



// }}}
// {{{ NX.util.Event

/**
 * @class NX.util.Event
 */

var privateStatics = {

    // {{{ createBuffered

    /**
     * @method createBuffered
     * @private
     */
    createBuffered: function(handler, listener, o, scope) {

        listener.task = new Ext.util.DelayedTask();

        return function() {
            listener.task.delay(o.buffer, handler, scope, Ext.Array.toArray(arguments));
        };

    },

    // }}}
    // {{{ createDelayed

    /**
     * @method createDelayed
     * @private
     */
    createDelayed: function(handler, listener, o, scope) {

        return function() {

            var task = new Ext.util.DelayedTask();

            if(!listener.tasks) {
                listener.tasks = [];
            }

            listener.tasks.push(task);

            task.delay(o.delay || 10, handler, scope, Ext.Array.toArray(arguments));
        };
    },

    // }}}
    // {{{ createSingle

    /**
     * @method createSingle
     * @private
     */
    createSingle: function(handler, listener, o, scope) {

        return function() {

            listener.ev.removeListener(listener.fn, scope);

            return handler.apply(scope, arguments);

        };

    }

    // }}}

};

var T_UTIL_Event = module.exports = {

    // {{{ isEvent

    /**
     * @prop isEvent
     */
    isEvent: true,

    // }}}
    // {{{ constructor

    /**
     * @method constructor
     */
    constructor: require('./constructor'),

    // }}}
    // {{{ addListener

    /**
     * @method addListener
     */
    addListener: require('./addListener'),

    // }}}
    // {{{ createListener

    /**
     * @method createListener
     */
    createListener: function(fn, scope, o) {
        require('./createListener').call(
            this,
            privateStatics,
            fn,
            scope,
            o
        );
    },

    // }}}
    // {{{ findListener

    /**
     * @method findListener
     */
    findListener: require('findListener'),

    // }}}
    // {{{ isListening

    /**
     * @method isListening
     */
    isListening: require('./isListening'),

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
    // {{{ fire

    /**
     * @method fire
     */
    fire: require('./fire')

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
