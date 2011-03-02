/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.util.Event.createListener

var $METHOD = module.exports = function(fn, scope, o) {

    o = o || {};
    scope = scope || this.observable;

    var listener = {
        fn: fn,
        scope: scope,
        o: o,
        ev: this
    },
    handler = fn;

    if(o.delay) {
        handler = createDelayed(handler, listener, o, scope);
    }

    if(o.buffer) {
        handler = createBuffered(handler, listener, o, scope);
    }

    if(o.single) {
        handler = createSingle(handler, listener, o, scope);
    }

    listener.fireFn = handler;
    return listener;
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
