/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.Function.flexSetter

var $METHOD = module.exports = function(fn) {

    return function(a, b) {
        var k, i, me = this;

        if(a === null) {
            return me;
        }

        if(typeof a !== 'string') {

            for(k in a) {
                if(a.hasOwnProperty(k)) {
                    fn.call(me, k, a[k]);
                }
            }

        } else {
            fn.call(me, a, b);
        }

        return me;
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
