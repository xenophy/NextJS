/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.Date.parse

module.exports = function(input, format, strict) {

    var p = NX.Date.parseFunctions;

    if(p[format] == null) {
        NX.Date.createParser(format);
    }

    return p[format](input, NX.isDefined(strict) ? strict : NX.Date.useStrict);
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
