/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.clone

var $METHOD = module.exports = function(item) {

    if(!item) {
        return item;
    }

    if(item instanceof Date) {
        return new Date(item.getTime());
    }

    var i, j, k, clone, key;

    if(this.isArray(item)) {
        i = item.length;

        clone = new Array(i);

        while(i--) {
            clone[i] = this.clone(item[i]);
        }

    } else if(this.isObject(item)) {

        clone = item.constructor ? new item.constructor() : {};

        for(key in item) {
            clone[key] = this.clone(item[key]);
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
