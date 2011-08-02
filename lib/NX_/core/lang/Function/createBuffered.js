/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.Function.createBuffered

module.exports = function(fn, buffer, scope, args) {

    return function() {

        var timerId;

        return function() {

            var me = this;

            if (timerId) {
                clearInterval(timerId);
                timerId = null;
            }

            timerId = setTimeout(function(){
                fn.apply(scope || me, args || arguments);
            }, buffer);

        };

    }();
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
