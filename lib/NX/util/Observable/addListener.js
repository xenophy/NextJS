/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.util.Observable.addListener

var $METHOD = module.exports = function(ename, fn, scope, options) {

    var me = this,
        config,
        event;

    if(T_NX.isObject(ename)) {

        options = ename;

        for(ename in options) {

            if(options.hasOwnProperty(ename)) {

                config = options[ename];

                if(!me.eventOptionsRe.test(ename)) {

                    me.addListener(ename, config.fn || config, config.scope || options.scope, config.fn ? config : options);

                }
            }
        }

    } else {

        ename = ename.toLowerCase();

        me.events[ename] = me.events[ename] || true;

        event = me.events[ename] || true;

        if(T_NX.isBoolean(event)) {

            me.events[ename] = event = new NX_UTIL_Event(me, ename);

        }

        event.addListener(fn, scope, Ext.isObject(options) ? options : {});
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
