/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

var stripTagsRE = /<\/?[^>]+>/gi;

// {{{ NX.util.Format.stripTags

module.exports = function(v) {
    return !v ? v : String(v).replace(stripTagsRE, "");
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
