/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var escapeRegexRe = require('./escapeRegexRe');

// }}}
// {{{ NX.String.escapeRegex

var $METHOD = module.exports = function(s) {
    return s.replace(escapeRegexRe, "\\$1");
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
