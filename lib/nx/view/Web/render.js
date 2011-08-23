/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.view.Web.render

module.exports = function(req, res, next) {

    var me = this,
        info = res.result,
        dumpinfo = res.$dump,
        rc = res.actionReturnConfig;

    // スーパークラスメソッドコール
    me.callParent(arguments);

    if(rc.render === false) {
        next();
        return;
    }

    // リダイレクト処理
    if(NX.isString(rc.redirect)) {

        res.writeHead(302, {
            'Location': rc.redirect
        });
        res.end();

        next();

        return;
    }

    if(NX.isString(rc.template)) {
        me.paths.template = NX.Path.normalize(me.paths.templates + '/' + rc.template);
    }

    if(me.paths.template === false) {
        next();
        return;
    }

    me.loadFile(me.paths.template, function(err, data, stat, ext) {

        if(err) {

            switch(err.type) {

                case 'not found':

                    // 404エラー
                    res.$errorCode = 404;
                    me.error.call(me, req, res, next);

                return false;

                break;
            }
        }

        var display = function(data, size, useTpl) {

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

            next();

        };

        // テンプレート処理
        if(NX.Array.contains(me.tplExts, ext)) {

            var tpl = NX.create('NX.Template', me.paths);

            tpl.fetch(data.toString(), info, function(data) {

                if(dumpinfo && dumpinfo.length > 0) {

                    me.renderWithDump({
                        data: data,
                        info: dumpinfo,
                        req: req,
                        res: res
                    }, function(data) {
                        display(data, Buffer.byteLength(data, 'utf8'), true);
                    });

                } else {

                    var size = Buffer.byteLength(data, 'utf8');
                    display(data, size, true);

                }
            });

        } else {

            display(data, stat.size, false);

        }

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
