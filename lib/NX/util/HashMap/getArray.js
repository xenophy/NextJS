/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.util.HashMap.getArray

var $METHOD = module.exports = function(isKey) {

    var arr = [], key, map = this.map;

    for(key in map) {
        if(map.hasOwnProperty(key)) {
            arr.push(isKey ? key: map[key]);
        }
    }

    return arr;
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
