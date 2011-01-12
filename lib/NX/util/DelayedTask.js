/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.util.DelayedTask

/**
 * @class NX.util.DelayedTask
 */
NX.util.DelayedTask = function(fn, scope, args) {

    // {{{ constructor

    /**
     * @method DelayedTask
     */
    var me = this,
        id,
        call = function(){
            clearInterval(id);
            id = null;
            fn.apply(scope, args || []);
        };

    // }}}
    // {{{ delay

    /**
     * @method delay
     */
    me.delay = function(delay, newFn, newScope, newArgs) {

        me.cancel();

        fn = newFn || fn;

        scope = newScope || scope;

        args = newArgs || args;

        id = setInterval(call, delay);

    };

    // }}}
    // {{{ cancel

    /**
     * @method cancel
     */
    me.cancel = function() {

        if(id) {
            clearInterval(id);
            id = null;
        }
    };

    // }}}

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
