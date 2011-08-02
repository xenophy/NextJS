/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.server.Cookie.getData

module.exports = function() {

    return {
        originalMaxAge: this.originalMaxAge,
        expires: this.expires,
        secure: this.secure,
        httpOnly: this.httpOnly,
        domain: this.domain,
        path: this.path
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
