/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.util.Observable.removeManagedListener

var $METHOD = module.exports = function(item, ename, fn, scope) {

    var me = this,
        options,
        config,
        managedListeners,
        managedListener,
        length,
        i;

    if(T_NX.isObject(ename)) {

        options = ename;

        for(ename in options) {

            if(options.hasOwnProperty(ename)) {

                config = options[ename];

                if(!me.eventOptionsRe.test(ename)) {

                    me.removeManagedListener(item, ename, config.fn || config, config.scope || options.scope);

                }
            }
        }
    }

    managedListeners = me.managedListeners ? me.managedListeners.slice() : [];
    length = managedListeners.length;

    for(i = 0; i < length; i++) {

        managedListener = managedListeners[i];

        if(managedListener.item === item && managedListener.ename === ename && (!fn || managedListener.fn === fn) && (!scope || managedListener.scope === scope)) {
            T_Array.remove(me.managedListeners, managedListener);
            item.un(managedListener.ename, managedListener.fn, managedListener.scope);
        }
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
