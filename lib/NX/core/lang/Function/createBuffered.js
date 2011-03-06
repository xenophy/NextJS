/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.Function.createBuffered

var $METHOD = module.exports = function(fn, buffer, scope, args) {

    var task = fn.task || (fn.task = new T_UTIL_DelayedTask());

    return T_NX.apply(function() {
        task.delay(buffer, fn, scope || this, args || T_NX.toArray(arguments));
    }, task);

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
