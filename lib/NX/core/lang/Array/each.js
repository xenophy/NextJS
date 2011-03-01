/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var T_NX = require('../../../core');

// }}}
// {{{ NX.Array.each

var $METHOD = module.exports = function(array, fn, scope) {

    if(T_NX.isEmpty(array, true)) {
        return 0;
    }

    if(!T_NX.isIterable(array) || T_NX.isPrimitive(array)) {
        array = [array];
    }

    for(var i = 0, len = array.length; i < len; i++) {
        if(fn.call(scope || array[i], array[i], i, array) === false) {
            return i;
        }
    }

    return true;
}

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
