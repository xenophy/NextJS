/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.server.Https.constructor

module.exports = function(stack, config) {

    // httpsインプリメント
    NX.server.Https.implement(require('https'));

    config = config || {};

    var stack = this.stack = stack || [];

    key = config.key;
    cert = config.cert;

    var o = {
        key: key,
        cert: cert
    };

    if(config.ca) {
        o.ca = config.ca;
    }

    return this.createServer(o , function(req, res) {

        var idx = 0;

        function next(err) {
            var layer = stack[idx++];
            if(layer) {
                layer(req, res, next);
            }
        }
        next();

    });

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
