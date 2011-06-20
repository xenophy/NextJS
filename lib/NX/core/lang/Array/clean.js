/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.Array.clean

module.exports = function(array) {

    var results = [],
    i = 0,
    ln = array.length,
    item;

    for (; i < ln; i++) {
        item = array[i];

        if (!NX.isEmpty(item)) {
            results.push(item);
        }
    }

    return results;
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
