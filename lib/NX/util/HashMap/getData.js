/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var getKey = require('./getKey');

// }}}
// {{{ NX.util.HashMap.getData

var $METHOD = module.exports = function(key, value) {

    if(value === undefined) {
        value = key;
        key = getKey(value);
    }

    return [key, value];
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */