/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var T_NX = require('../../core');

// }}}
// {{{ NX.util.Observable.resumeEvents

var $METHOD = module.exports = function() {

    var me = this, queued = me.eventQueue || [];

    me.eventsSuspended = false;
    delete me.eventQueue;

    T_NX.each(queued, function(e) {
        me.fireEvent.apply(me, e);
    });
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
