/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.server.Server.bodyParser

module.exports = function () {

    var parse = {
        'application/x-www-form-urlencoded': require('querystring').parse,
        'application/json': JSON.parse
    };

    return function(req, res, next) {

        if('GET' == req.method || 'HEAD' == req.method) {
            return next();
        }

        var mime = function(req) {
            var str = req.headers['content-type'] || '';
            return str.split(';')[0];
        };

        var parser = parse[mime(req)];

        if(parser && !req.body) {

            var data = '';

            req.setEncoding('utf8');

            req.on('data', function(chunk) {
                data += chunk;
            });

            req.on('end', function(){

                req.rawBody = data;

                try {

                    req.body = data ? parser(data) : {};

                } catch (err) {

                    return next(err);

                }

                next();

            });

        } else {

            next();

        }

    }

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
