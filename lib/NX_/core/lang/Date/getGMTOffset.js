/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.Date.getGMTOffset

module.exports = function(date, colon) {

    var offset = date.getTimezoneOffset();

    return (offset > 0 ? "-" : "+")
           + NX.String.leftPad(Math.floor(Math.abs(offset) / 60), 2, "0")
           + (colon ? ":" : "")
           + NX.String.leftPad(Math.abs(offset % 60), 2, "0");
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
