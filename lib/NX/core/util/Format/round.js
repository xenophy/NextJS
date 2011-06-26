/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.util.Format.round

module.exports = function(value, precision) {

    var result = Number(value);

    if(typeof precision == 'number') {
        precision = Math.pow(10, precision);
        result = Math.round(value * precision) / precision;
    }

    return result;
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
