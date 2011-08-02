/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.Date.formatCodeToRegex

module.exports = function(character, currentGroup) {

    var me = this;
    var p = NX.Date.parseCodes[character];

    if(p) {
        p = typeof p == 'function'? p() : p;
        NX.Date.parseCodes[character] = p;
    }

    return p ? NX.applyIf({
        c: p.c ? me.$xf(p.c, currentGroup || "{0}") : p.c
    }, p) : {
        g: 0,
        c: null,
        s: NX.String.escapeRegex(character)
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
