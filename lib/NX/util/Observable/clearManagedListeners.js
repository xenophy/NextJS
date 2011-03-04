/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.util.Observable.clearManagedListeners

var $METHOD = module.exports = function() {

    var managedListeners = this.managedListeners || [],
        i = 0,
        len = managedListeners.length,
        managedListener;

    for(; i < len; i++) {
        managedListener = managedListeners[i];
        managedListener.item.un(managedListener.ename, managedListener.fn, managedListener.scope);
    }

    this.managedListener = [];
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
