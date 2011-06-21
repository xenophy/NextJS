/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.Object.getKeys

module.exports = ('keys' in Object.prototype) ? Object.keys : function(object) {

    var keys = [], property;

    for (property in object) {
        if (object.hasOwnProperty(property)) {
            keys.push(property);
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
