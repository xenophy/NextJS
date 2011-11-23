/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.view.Web.error

//module.exports = function(code, next) {
module.exports = function(req, res, next) {

    var me = this,
        dumpinfo = res.$dump;
        code = res.$errorCode;

    // エラードキュメントファイルパス取得
    file = NX.WebView.errorDocument[code];

    // エラードキュメント読み込み
    me.loadFile(file, function(err, data, stat) {

        // エラー情報取得
        var msg;
        var stack;
        var size = stat.size;
        var displayErrors = false

        if(res.$errorDetails) {

            var ed = res.$errorDetails;

            msg = ed.msg;
            stack = ed.stack;

            displayErrors = 'true';
        }

        var display = function(data, size) {

            if(err) {

                switch(err.type) {
                    case 'not found':

                    res.writeHead(500);
                    res.write('Error 404 Default Template is not found.');
                    res.end();

                    next();

                    break;
                }

                return;
            }

            var maxAge = 0;
            var headers = {
                "Content-Type": NX.WebView.mimetype.html,
                "Content-Length": size,
                "Last-Modified": stat.mtime.toUTCString(),
                "Cache-Control": "public max-age=" + (maxAge / 1000),
                "ETag": NX.WebView.etag(stat)
            };

            if(res.$errorCode === 401) {
                headers['WWW-Authenticate'] = 'Basic realm="' + res.$authorizationRealm + '"';
            }

            res.writeHead(res.$errorCode, headers);
            res.end(data);

            // 次へ
            next();
        };

        var tpl = NX.create('NX.Template', me.paths);

        tpl.fetch(data.toString(), {
            displayErrors: displayErrors,
            msg: msg,
            stack: stack
        }, function(data) {

            if(dumpinfo && dumpinfo.length > 0 && res.$errorCode !== 403) {

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
