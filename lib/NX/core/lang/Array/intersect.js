/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var unique = require('./unique');

// }}}
// {{{ NX.Array.intersect

var $METHOD = module.exports = function() {

    var intersect = [],
    arrays = Array.prototype.slice.call(arguments),
    i, j, k, minArray, array, x, y, ln, arraysLn, arrayLn;

    if (!arrays.length) {
        return intersect;
    }

    for (i = x = 0, ln = arrays.length; i < ln, array = arrays[i]; i++) {
        if (!minArray || array.length < minArray.length) {
            minArray = array;
            x = i;
        }
    }

    minArray = unique(minArray);
    arrays.splice(x, 1);

    for (i = 0, ln = minArray.length; i < ln, x = minArray[i]; i++) {
        var count = 0;

        for (j = 0, arraysLn = arrays.length; j < arraysLn, array = arrays[j]; j++) {
            for (k = 0, arrayLn = array.length; k < arrayLn, y = array[k]; k++) {
                if (x === y) {
                    count++;
                    break;
                }
            }
        }

        if (count == arraysLn) {
            intersect.push(x);
        }
    }

    return intersect;

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
