/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.util.HashMap.clone

var $METHOD = module.exports = function() {

    var hash = new this.self(), map = this.map, key;

    //hash.suspendEvents();

    for(key in map) {
        if(map.hasOwnProperty(key)) {
            hash.add(key, map[key]);
        }
    }

//    hash.resumeEvents();

    return hash;
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
