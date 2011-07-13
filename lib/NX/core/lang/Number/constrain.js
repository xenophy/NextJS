/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.Number.constrain

module.exports = function(number, min, max) {

    number = parseFloat(number);

    if(!isNaN(min)) {
        number = Math.max(number, min);
    }

    if(!isNaN(max)) {
        number = Math.min(number, max);
    }

    return number;
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
