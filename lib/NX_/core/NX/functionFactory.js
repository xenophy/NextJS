/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.functionFactory

module.exports = function() {

    var args = Array.prototype.slice.call(arguments);

    if (args.length > 0) {
        args[args.length - 1] = 'var NX=global.' + this.getUniqueGlobalNamespace() + ';' +
        args[args.length - 1];
    }

    return Function.prototype.constructor.apply(Function.prototype, args);
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
