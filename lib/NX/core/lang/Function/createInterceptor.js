/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var T_NX = require('../../../core');

// }}}
// {{{ NX.Function.createInterceptor

var $METHOD = module.exports = function(origFn, newFn, scope, returnValue) {

    var method = origFn;

    if(!T_NX.isFunction(newFn)) {

        return origFn;

    } else {

        return function() {

            var me = this, args = arguments;

            newFn.target = me;
            newFn.method = origFn;

            return (newFn.apply(scope || me || global, args) !== false) ? origFn.apply(me || global, args) : returnValue || null;

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
