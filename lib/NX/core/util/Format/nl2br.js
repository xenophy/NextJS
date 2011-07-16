/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

var nl2brRe = /\r?\n/g;

// {{{ NX.util.Format.nl2br

module.exports = function(v) {
    return NX.isEmpty(v) ? '' : v.replace(nl2brRe, '<br />');
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
