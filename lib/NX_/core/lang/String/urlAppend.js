/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.String.urlAppend

module.exports = function(url, string) {

    if(!NX.isEmpty(string)) {
        return url + (url.indexOf('?') === -1 ? '?' : '&') + string;
    }

    return url;
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
