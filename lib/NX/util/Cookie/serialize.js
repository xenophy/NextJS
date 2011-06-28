/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.util.Cookie.serialize

module.exports = function(name, v, obj) {

    var pairs = [name + '=' + encodeURIComponent(v)],
        obj = obj || {};

    if(obj.domain) {
        pairs.push('domain=' + obj.domain);
    }

    if(obj.path) {
        pairs.push('path=' + obj.path);
    }

    if(obj.expires) {
        pairs.push('expires=' + obj.expires.toUTCString());
    }

    if(obj.httpOnly) {
        pairs.push('httpOnly');
    }

    if(obj.secure) {
        pairs.push('secure');
    }

    return pairs.join('; ');

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
