/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.Date.format

module.exports = function(date, format) {

    if(NX.Date.formatFunctions[format] == null) {
        NX.Date.createFormat(format);
    }

    var result = NX.Date.formatFunctions[format].call(date);

    return result + '';
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
