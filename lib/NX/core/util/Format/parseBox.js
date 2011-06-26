/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.util.Format.parseBox

module.exports = function(box) {

    if(NX.isNumber(box)) {
        box = box.toString();
    }

    var parts  = box.split(' '), ln = parts.length;

    if(ln == 1) {

        parts[1] = parts[2] = parts[3] = parts[0];

    } else if (ln == 2) {

        parts[2] = parts[0];
        parts[3] = parts[1];

    } else if (ln == 3) {

        parts[3] = parts[1];

    }

    return {
        top    : parseInt(parts[0], 10) || 0,
        right  : parseInt(parts[1], 10) || 0,
        bottom : parseInt(parts[2], 10) || 0,
        left   : parseInt(parts[3], 10) || 0
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
