/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.util.HashMap.findKey

var $METHOD = module.exports = function(value) {

    var me = this, key, map = me.map;

    for(key in map) {
        if(map.hasOwnProperty(key) && map[key] === value) {
            return key;
        }
    }

    return undefined;
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
