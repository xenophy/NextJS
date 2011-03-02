/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.util.Event.findListener

var $METHOD = module.exports = function(fn, scope) {

    var listeners = this.listeners,
        i = listeners.length,
        listener,
        s;

    while(i--) {

        listener = listeners[i];

        if(listener) {

            s = listener.scope;

            if(listener.fn == fn && (s == scope || s == this.observable)) {
                return i;
            }
        }
    }

    return - 1;
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
