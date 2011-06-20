/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.Array.difference

module.exports = function(arrayA, arrayB) {

    var slice = Array.prototype.slice;
    var erase = function(array, index, removeCount) {
        array.splice(index, removeCount);
        return array;
    };
    var clone = slice.call(arrayA),
        ln = clone.length,
        i, j, lnB;

    for (i = 0,lnB = arrayB.length; i < lnB; i++) {
        for (j = 0; j < ln; j++) {
            if (clone[j] === arrayB[i]) {
                erase(clone, j, 1);
                j--;
                ln--;
            }
        }
    }

    return clone;
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
