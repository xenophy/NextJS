/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.Array.each

module.exports = function(array, fn, scope, reverse) {

    array = NX.Array.from(array);

    var i, ln = array.length;

    if (reverse !== true) {
        for (i = 0; i < ln; i++) {
            if (fn.call(scope || array[i], array[i], i, array) === false) {
                return i;
            }
        }
    } else {
        for (i = ln - 1; i > -1; i--) {
            if (fn.call(scope || array[i], array[i], i, array) === false) {
                return i;
            }
        }
    }

    return true;
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
