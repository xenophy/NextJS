/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.Date.createFormat

module.exports = function(format) {
    var code = [],
        special = false,
        ch = '';

    for(var i = 0; i < format.length; ++i) {

        ch = format.charAt(i);

        if(!special && ch == "\\") {

            special = true;

        } else if(special) {

            special = false;
            code.push("'" + NX.String.escape(ch) + "'");

        } else {

            code.push(NX.Date.getFormatCode(ch));
        }
    }

    NX.Date.formatFunctions[format] = NX.functionFactory("return " + code.join('+'));
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
