/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.util.Format.math

module.exports = function() {

    var fns = {};

    return function(v, a) {

        if(!fns[a]) {

            fns[a] = NX.functionFactory('v', 'return v ' + a + ';');

        }

        return fns[a](v);
    };

}();

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
