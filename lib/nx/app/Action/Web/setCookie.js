/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.app.action.Web.setCookie

module.exports = function(name, value, options) {

    var me = this;
    var cookies = this.res.cookies || (this.res.cookies = []),
        cookie = [ name, "=", value, ";" ];

    options = options || {};

    if(options.expires) {
        cookie.push(" expires=", (new Date(options.expires)).toUTCString(), ";");
    }

    if(options.path) {
        cookie.push(" path=", options.path, ";");
    }

    if(options.domain) {
        cookie.push(" domain=", options.domain, ";");
    }

    if(options.secure) {
        cookie.push(" secure", ";");
    }

    if(options.httpOnly) {
        cookie.push(" httpOnly");
    }

    cookies.push(cookie.join(""));

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
