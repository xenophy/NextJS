/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.util.Observable.clearListeners

var $METHOD = module.exports = function() {

    var events = this.events,
        event,
        key;

    for(key in events) {
        if(events.hasOwnProperty(key)) {
            event = events[key];
            if(event.isEvent) {
                event.clearListeners();
            }
        }
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
