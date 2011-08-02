/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.Date.getFormatCode

module.exports = function(character) {

    var f = NX.Date.formatCodes[character];

    if(f) {
        f = typeof f == 'function'? f() : f;
        NX.Date.formatCodes[character] = f;
    }

    return f || ("'" + NX.String.escape(character) + "'");
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
