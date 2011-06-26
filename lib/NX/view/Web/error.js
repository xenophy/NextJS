/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.view.Web.error

module.exports = function(code) {

    var me = this, res = me.res, req = me.req,

    file = NX.WebView.errorDocument[code];

    me.loadFile(file, function(err, data, stat) {

        if(err) {

            switch(err.type) {
                case 'not found':

                    res.writeHead(500);
                res.write('Error 404 Default Template is not found.');
                res.end();

                break;
            }

            return;
        }

        var maxAge = 0;
        var headers = {
            "Content-Type": NX.WebView.mimetype.html,
            "Content-Length": stat.size,
            "Last-Modified": stat.mtime.toUTCString(),
            "Cache-Control": "public max-age=" + (maxAge / 1000),
            "ETag": NX.WebView.etag(stat)
        };

        res.writeHead(code, headers);
        res.end(data);

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
