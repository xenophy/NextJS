/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.app.WebController.init

module.exports = function(req, res, next) {

    var me = this;
    var querystring = require('querystring');
    var url = NX.Url.parse(req.url);
    var favicon = process.NXEnv.libdir + '/resources/favicon.ico';

    // Favicon転送
    if(querystring.unescape(url.pathname) === '/favicon.ico') {

        var file = req.config.paths.public + '/favicon.ico';

        NX.Path.exists(file, function(exists) {

            if(!exists) {
                file = favicon;
            }

            NX.Fs.readFile(favicon, function(err, data) {

                var maxAge = 86400000;
                var etag = require('crypto').createHash('md5').update(data.toString()).digest('hex');

                icon = {
                    headers: {
                        'Content-Type': 'image/x-icon',
                        'Content-Length': data.length,
                        'ETag': '"' + etag + '"',
                        'Cache-Control': 'public, max-age=' + (maxAge / 1000)
                    },
                    body: data
                };
                res.writeHead(200, icon.headers);
                res.end(icon.body);
                next();

            });

        });

    } else {

        // スーパークラスメソッドコール
        me.callParent(arguments);

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
