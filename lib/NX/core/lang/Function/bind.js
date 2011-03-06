/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var T_NX = require('../../../core');

// }}}
// {{{ NX.Function.bind

var $METHOD = module.exports = function(fn, scope, args, appendArgs) {

    var method = fn, applyArgs;

    return function() {

        var callArgs = args || arguments;

        if(appendArgs === true) {

            callArgs = Array.prototype.slice.call(arguments, 0);
            callArgs = callArgs.concat(args);

        } else if(T_NX.isNumber(appendArgs)) {

            callArgs = Array.prototype.slice.call(arguments, 0);
            applyArgs = [appendArgs, 0].concat(args);

            Array.prototype.splice.apply(callArgs, applyArgs);

        }

        return method.apply(scope || global, callArgs);
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
