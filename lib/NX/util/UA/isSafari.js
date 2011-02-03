/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ isSafari

var isChrome = require('./isChrome');
var isXperia = require('./isXperia');

var isSafari = module.exports = function(ua) {

    if(!isChrome(ua) && !isXperia(ua) && ua.match(/safari/i)) {
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
