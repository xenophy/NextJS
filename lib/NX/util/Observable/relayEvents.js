/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.util.Observable.relayEvents

var $METHOD = module.exports = function(origin, events, prefix) {

    prefix = prefix || '';

    var me = this,
        len = events.length,
        i = 0,
        oldName,
        newName;

    for(; i < len; i++){
        oldName = events[i].substr(prefix.length);
        newName = prefix + oldName;
        me.events[newName] = me.events[newName] || true;
        origin.on(oldName, me.createRelayer(newName));
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
