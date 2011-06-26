/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.view.Web.render

module.exports = function(info) {

    var me = this, res = me.res, req = me.req;

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

        // テンプレート処理
        if(NX.Array.contains(me.tplExts, ext)) {







        }

        var maxAge = 0;
        var headers = {
            "Content-Type": NX.WebView.mimetype[ext],
            "Content-Length": stat.size,
            "Last-Modified": stat.mtime.toUTCString(),
            "Cache-Control": "public max-age=" + (maxAge / 1000),
            "ETag": NX.WebView.etag(stat)
        };

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
