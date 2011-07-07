/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.server.Server.multipartParser

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

            /*
            var form = NX.create('NX.server.MultipartForm');

            form.parse(req, res, function() {



                next();

            });
            */

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
