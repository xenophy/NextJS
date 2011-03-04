/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var T_NX = require('../../core');

// }}}
// {{{ NX.util.Observable.suspendEvents

var $METHOD = module.exports = function(queueSuspended) {

    this.eventsSuspended = true;

    if(queueSuspended && !this.eventQueue) {
        this.eventQueue = [];
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
