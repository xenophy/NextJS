/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.Function.bind

module.exports = function(fn, scope, args, appendArgs) {

    var method = fn,
    slice = Array.prototype.slice;

    return function() {

        var callArgs = args || arguments;

        if (appendArgs === true) {

            callArgs = slice.call(arguments, 0);
            callArgs = callArgs.concat(args);

        } else if (NX.isNumber(appendArgs)) {

            callArgs = slice.call(arguments, 0);
            NX.Array.insert(callArgs, appendArgs, args);

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
