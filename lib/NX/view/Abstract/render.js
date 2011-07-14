/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.view.AbstractView.render

module.exports = function() {

    var me = this,
        res = me.res,
        req = me.req;

    // スーパークラスメソッドコール
    me.callParent(arguments);

    if(me.paths.template === false) {
        return;
    }

    me.loadFile(me.paths.template, function(err, data, stat, ext) {

        if(err) {

            switch(err.type) {

                case 'not found':

                    // 404エラー
                    me.error(404);

                return false;

                break;
            }
        }

        var size = stat.size;
        var useTpl = false;

        // テンプレート処理
        if(NX.Array.contains(me.tplExts, ext)) {

            var tpl = new NX.Template(me.paths);
            data = tpl.fetch(data.toString(), info);

            size = Buffer.byteLength(data, 'utf8');

            useTpl = true;

        }

        var maxAge = 0;
        var headers = {
            "Content-Type": NX.WebView.mimetype[ext],
            "Content-Length": size,
            "Last-Modified": stat.mtime.toUTCString(),
            "Expires": "Thu, 01 Dec 1994 16:00:00 GMT",
            "Cache-Control": "no-cache, must-revalidate, post-check=0, pre-check=0",
            "Pragma": "no-cache",
            "ETag": NX.WebView.etag(stat)
        };

        if(!useTpl) {
            headers["Cache-Control"] = "public max-age=" + (maxAge / 1000);
        }

        res.writeHead(200, headers);
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
