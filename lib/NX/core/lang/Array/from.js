/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var T_NX = require('../../../core');
var toArray = require('./toArray');

// }}}
// {{{ NX.Array.from

var $METHOD = module.exports = function(value) {

    if(T_NX.isDefined(value) && T_NX.isIterable(value)) {
        return toArray(value);
    }

    if(T_NX.isDefined(value) && value !== null) {
        return [value];
    }

    return [];
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
