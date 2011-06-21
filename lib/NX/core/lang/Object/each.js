/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.Object.each

module.exports = function(object, fn, scope) {
    for (var property in object) {
        if (object.hasOwnProperty(property)) {
            if (fn.call(scope || object, property, object[property], object) === false) {
                return;
            }
        }
    }
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
