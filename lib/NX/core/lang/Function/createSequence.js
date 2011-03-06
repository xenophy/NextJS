/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.Function.createSequence

var $METHOD = module.exports = function(origFn, newFn, scope) {

    if(!T_NX.isFunction(newFn)) {

        return origFn;

    } else {

        return function() {

            var retval = origFn.apply(this || global, arguments);

            newFn.apply(scope || this || global, arguments);

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
