/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.Function.createDelayed

module.exports = function(fn, delay, scope, args, appendArgs) {

    if (scope || args) {
        fn = NX.Function.bind(fn, scope, args, appendArgs);
    }

    return function() {
        var me = this;
        setTimeout(function() {
            fn.apply(me, arguments);
        }, delay);
    };
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
