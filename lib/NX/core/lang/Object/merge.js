/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var T_NX = require('../../../core');

// }}}
// {{{ NX.Object.merge

var $METHOD = module.exports = function(source, key, value) {

    if(T_NX.isString(key)) {
        if(T_NX.isObject(value) && T_NX.isObject(source[key])) {
            $METHOD(source[key], value);
        } else {
            source[key] = T_NX.clone(value);
        }

        return source;
    }

    var i = 1,
    len = arguments.length,
    obj,
    prop;

    for(; i < len; i++) {
        obj = arguments[i];
        for(prop in obj) {
            if(obj.hasOwnProperty(prop)) {
                $METHOD(source, prop, obj[prop]);
            }
        }
    }

    return source;
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
