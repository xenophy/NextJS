/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ isIE

var isIE = require('./isIE');
var isIE7 = require('./isIE7');
var isIE8 = require('./isIE8');

var isIE6 = module.exports = function(ua) {

    if(isIE(ua) && !isIE7(ua) && !isIE8(ua)) {
        return true;
    }

    return false;
}

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
