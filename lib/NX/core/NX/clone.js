/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.clone

module.exports = NXClone = function(item) {

    if(item === null || item === undefined) {
        return item;
    }

    var type = toString.call(item);

    if(type === '[object Date]') {
        return new Date(item.getTime());
    }

    var i, j, k, clone, key;

    if(type === '[object Array]') {

        i = item.length;
        clone = [];

        while(i--) {
            clone[i] = NXClone(item[i]);
        }

    } else if (type === '[object Object]' && item.constructor === Object) {

        clone = {};

        for(key in item) {
            clone[key] = NXClone(item[key]);
        }

    }

    return clone || item;

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
