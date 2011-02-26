/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.Object.keyOf

var $METHOD = module.exports = function(o, value) {
    for(var prop in o) {
        if(o.hasOwnProperty(prop) && o[prop] === value) {
            return prop;
        }
    }
    return null;
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
