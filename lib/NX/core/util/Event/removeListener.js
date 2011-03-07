/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.util.Event.removeListener

var $METHOD = module.exports = function(fn, scope) {

    var me = this,
        index,
        listener,
        k;
        index = me.findListener(fn, scope);

    if(index != -1) {

        listener = me.listeners[index];

        if(me.firing) {
            me.listeners = me.listeners.slice(0);
        }

        //if(listener.task) {
        //    listener.task.cancel();
        //    delete listener.task;
        //}

        k = listener.tasks && listener.tasks.length;

        /*
        if(k) {
            while(k--) {
                listener.tasks[k].cancel();
            }
            delete listener.tasks;
        }
        */

        me.listeners.splice(index, 1);

        return true;
    }

    return false;
};


// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
