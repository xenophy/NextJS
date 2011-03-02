/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.util.Event.addListener

var $METHOD = module.exports = function(fn, scope, options) {

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

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
