/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var include = require('./include');

// }}}
// {{{ NX.Array.merge

var $METHOD = module.exports = function() {

    var source = arguments[0],
    toMerge = Array.prototype.slice.call(arguments, 1),
    i, j, ln, subLn, array;

    for(i = 0, ln = toMerge.length; i < ln; i++) {
        array = toMerge[i];

        for(j = 0, subLn = array.length; j < subLn; j++) {
            include(source, array[j]);
        }
    }

    return source;
}

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
