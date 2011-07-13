/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.Number.toFixed

var isToFixedBroken = (0.9).toFixed() !== '1';

module.exports = function(value, precision) {

    if(isToFixedBroken) {
        precision = precision || 0;
        var pow = Math.pow(10, precision);
        return (Math.round(value * pow) / pow).toFixed(precision);
    }

    return value.toFixed(precision);
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
