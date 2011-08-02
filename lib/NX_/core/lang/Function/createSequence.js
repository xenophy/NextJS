/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.Function.createSequence

module.exports = function(origFn, newFn, scope) {

    if (!NX.isFunction(newFn)) {
        return origFn;
    } else {
        return function() {
            var retval = origFn.apply(this || window, arguments);
            newFn.apply(scope || this || window, arguments);
            return retval;
        };
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
