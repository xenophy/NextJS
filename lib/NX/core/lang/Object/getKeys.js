/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var T_NX = require('../../../core');

// }}}
// {{{ NX.Object.getKeys

var $METHOD = module.exports = function(o) {

    var keys = [], prop;

    for(prop in o) {
        if(o.hasOwnProperty(prop)) {
            keys.push(prop);
        }
    }

    return keys;
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
