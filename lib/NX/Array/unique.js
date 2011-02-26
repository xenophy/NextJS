/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var forEach = require('./forEach');
var contains = require('./contains');

// }}}
// {{{ NX.Array.unique

var $METHOD = module.exports = function(array) {

    var clone = [];

    forEach(array, function(item) {
        if (!contains(clone, item)) {
            clone.push(item);
        }
    });

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
