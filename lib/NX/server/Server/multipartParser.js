/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.server.Server.multipartParser

module.exports = function(config) {





    return function(req, res, next) {

        var ct = req.header['content-type'];
        var method = req.method;

        if(ct && NX.isString(ct) && ct.indexOf('multipart/form-data;') === 0 && method && NX.isString(method) && method.toUpperCase() === 'POST') {

        } else {
            next();
        }


        /*

        if(
            req.headers['content-type'] &&
            NX.isString(req.headers['content-type']) &&
            req.headers['content-type'].indexOf('multipart/form-data;') === 0 &&
            req.method &&
            NX.isString(req.method) &&
            req.method.toUpperCase() === 'POST'
            ) {

                var form = new formidable.IncomingForm(),
                files = {}
                fields = {};

                form.uploadDir = '/tmp/';

                form
                .on('field', function(field, value) {
                    fields[field] = value;
                })
                .on('file', function(field, file) {
                    files[field] = file;
                })
                .on('end', function() {

                    req.files = files;
                    req.body = fields;
                    next();
                });
                form.parse(req);


            } else {

                next();

            }



            next();
            */

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
