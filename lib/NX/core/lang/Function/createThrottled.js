/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.Function.createThrottled

module.exports = function(fn, interval, scope) {
    var lastCallTime, elapsed, lastArgs, timer, execute = function() {
        fn.apply(scope || this, lastArgs);
        lastCallTime = new Date().getTime();
    };

    return function() {

        elapsed = new Date().getTime() - lastCallTime;
        lastArgs = arguments;

        clearTimeout(timer);

        if (!lastCallTime || (elapsed >= interval)) {
            execute();
        } else {
            timer = setTimeout(execute, interval - elapsed);
        }
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
