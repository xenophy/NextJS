/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ isGecko3

var isGecko = require('./isGecko');

var isGecko3 = module.exports = function(ua) {

    if(isGecko(ua) && ua.match(/rv:1\.9/i)) {
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
