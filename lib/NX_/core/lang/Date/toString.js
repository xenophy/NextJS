/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.Date.toString

module.exports = function(date) {

    var pad = NX.String.leftPad;

    return date.getFullYear() + "-"
           + pad(date.getMonth() + 1, 2, '0') + "-"
           + pad(date.getDate(), 2, '0') + "T"
           + pad(date.getHours(), 2, '0') + ":"
           + pad(date.getMinutes(), 2, '0') + ":"
           + pad(date.getSeconds(), 2, '0');
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
