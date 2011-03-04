/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var T_NX = require('../../core');
var T_Array = require('../../core/lang/Array');

// }}}
// {{{ NX.util.Observable.fireEvent

var $METHOD = module.exports = function() {

    var me = this,
        args = T_Array.toArray(arguments),
        ename = args[0].toLowerCase(),
        ret = true,
        event = me.events[ename],
        queue = me.eventQueue,
        parent;

    if(me.eventsSuspended === true) {

        if(queue) {
            queue.push(args);
        }

        return false;

    } else if(event && T_NX.isObject(event) && event.bubble) {

        if(event.fire.apply(event, args.slice(1)) === false) {
            return false;
        }

        parent = me.getBubbleTarget && me.getBubbleTarget();

        if(parent && parent.isObservable) {

            if(!parent.events[ename] || !T_NX.isObject(parent.events[ename]) || !parent.events[ename].bubble) {

                parent.enableBubble(ename);

            }

            return parent.fireEvent.apply(parent, args);
        }

    } else if(event && T_NX.isObject(event)) {

        args.shift();
        ret = event.fire.apply(event, args);

    }

    return ret;

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
