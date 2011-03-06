/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var T_Array = require('../Array');

// }}}
// {{{ NX.Function.pass

var $METHOD = module.exports = function(fn, args, scope) {

    if(args) {
        args = T_Array.from(args);
    }

    return function() {
        return fn.apply(scope, args || arguments);
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
