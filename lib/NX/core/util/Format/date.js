/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.util.Format.date

module.exports = function(v, format) {

    if(!v) {
        return "";
    }

    if(!NX.isDate(v)) {
        v = new Date(Date.parse(v));
    }

    return NX.Date.dateFormat(v, format || NX.Date.defaultFormat);

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
