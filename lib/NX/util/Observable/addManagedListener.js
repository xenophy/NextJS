/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.util.Observable.addManagedListener

var $METHOD = module.exports = function(item, ename, fn, scope, options) {

    var me = this,
        managedListeners = me.managedListeners = me.managedListeners || [],
        config;

    if(T_NX.isObject(ename)) {

        options = ename;

        for(ename in options) {

            if(options.hasOwnProperty(ename)) {

                config = options[ename];

                if(!me.eventOptionsRe.test(ename)) {
                    me.addManagedListener(item, ename, config.fn || config, config.scope || options.scope, config.fn ? config : options);
                }
            }
        }

    } else {

        managedListeners.push({
            item: item,
            ename: ename,
            fn: fn,
            scope: scope,
            options: options
        });

        item.on(ename, fn, scope, options);
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
