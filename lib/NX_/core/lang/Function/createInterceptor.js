/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.Function.createInterceptor

module.exports = function(origFn, newFn, scope, returnValue) {

    var method = origFn;

    if (!NX.isFunction(newFn)) {
        return origFn;
    } else {
        return function() {
            var me = this,
            args = arguments;
            newFn.target = me;
            newFn.method = origFn;
            return (newFn.apply(scope || me || window, args) !== false) ? origFn.apply(me || window, args) : returnValue || null;
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
