/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.view.Web.statics.errorDocument

module.exports = {
    401: process.NXEnv.libdir + '/resources/error/HTTP_UNAUTHORIZED.html',
    403: process.NXEnv.libdir + '/resources/error/HTTP_FORBIDDEN.html',
    404: process.NXEnv.libdir + '/resources/error/HTTP_NOT_FOUND.html',
    500: process.NXEnv.libdir + '/resources/error/HTTP_INTERNAL_SERVER_ERROR.html'
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
