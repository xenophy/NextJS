/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.util.Observable.addEvents

var $METHOD = module.exports = function(o) {
    var me = this,
        args,
        len,
        i;

    me.events = me.events || {};

    if(T_NX.isString(o)) {

        args = arguments;
        i = args.length;

        while(i--) {
            me.events[args[i]] = me.events[args[i]] || true;
        }

    } else {
        T_NX.applyIf(me.events, o);
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
