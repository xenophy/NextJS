/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.util.Observable.enableBubble

var $METHOD = module.exports = function(events) {

    var me = this;

    if(!T_NX.isEmpty(events)) {

        events = T_NX.isArray(events) ? events: T_Array.toArray(arguments);

        T_NX.each(events, function(ename) {

            ename = ename.toLowerCase();

            var ce = me.events[ename] || true;

            if(T_NX.isBoolean(ce)) {

                ce = new Ext.util.Event(me, ename);
                me.events[ename] = ce;

            }

            ce.bubble = true;
        });
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
