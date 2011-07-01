/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.server.Server.cookieParser

module.exports = function () {

    return function(req, res, next) {

        var writeHead = res.writeHead;
        res.writeHead = function(status, headers){

            var COOKIE_KEY = 'Set-Cookie';

            headers = headers || {};

            var prev = headers[COOKIE_KEY] || [],

            cookies = res.cookies || [];

            cookies = cookies.concat(prev);

            if(cookies.length > 0) {
                headers[COOKIE_KEY] = cookies.join(" ");
            }

            res.writeHead = writeHead;

            return res.writeHead(status, headers);
        };

        var cookie = req.headers.cookie;

        req.cookies = {};
        res.cookies = [];

        if(cookie) {

            try {

                req.cookies = NX.Cookie.parse(cookie);

            } catch (err) {

                return next(err);

            }

        }

        next();
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
