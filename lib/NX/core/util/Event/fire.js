/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.util.Event.fire

var $METHOD = module.exports = function() {

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
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
