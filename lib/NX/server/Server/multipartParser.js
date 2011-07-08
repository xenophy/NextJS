/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.server.Server.multipart.Parser

module.exports = function(config) {

    return function(req, res, next) {

        var ct = req.headers['content-type'];
        var method = req.method;

        if(
            ct &&
            NX.isString(ct) &&
            ct.indexOf('multipart/form-data;') === 0 &&
            method &&
            NX.isString(method) &&
            method.toUpperCase() === 'POST'
        ) {

            NX.create('NX.server.multipart.Form').parse(req, res, function(err, fields, files) {

                req.files = files;
                next();

            });

        } else {
            next();
        }

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
