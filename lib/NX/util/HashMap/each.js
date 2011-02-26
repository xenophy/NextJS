/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var T_NX = require('../../core');

// }}}
// {{{ NX.util.HashMap.each

var $METHOD = module.exports = function(fn, scope) {

    var items = T_NX.apply({}, this.map), key, length = this.length;

    scope = scope || this;
    for(key in items) {
        if(items.hasOwnProperty(key)) {
            if(fn.call(scope, key, items[key], length) === false) {
                break;
            }
        }
    }

    return this;
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
