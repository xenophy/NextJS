/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var T_NX = require('../../core');

// }}}
// {{{ NX.util.Observable.constructor

var $METHOD = module.exports = function(config) {

    var me = this;

    T_NX.apply(me, config);

    if(me.listeners) {
        me.on(me.listeners);
        delete me.listeners;
    }

    me.events = me.events || {};

    if(me.bubbleEvents) {
        me.enableBubble(me.bubbleEvents);
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
