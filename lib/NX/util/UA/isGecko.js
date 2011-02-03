/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ isGecko

var isWebkit = require('./isWebkit');

var isGecko = module.exports = function(ua) {

    if(!isWebkit(ua) && ua.match(/gecko/i)) {
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
