/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.WebView

/**
 * @class NX.WebView
 */
NX.WebView = NX.extend(NX.view.AbstractView, {

    // {{{ init

    /**
     * @method init
     */
    init : function(config) {

        var me = this;

        config = config || {};

        // 設定適用
        NX.apply(me, config);

        if(me.template[me.template.length - 1] === '/') {
            me.template += "index.html";
        }

    },

    // }}}
    // {{{ render

    /**
     * @method render
     */
    render : function(values) {

        var me = this;
            maxAge = 0;
        var req = me.request,
            res = me.response,
            head = req.method == 'HEAD';


        // テンプレートファイル確認
        var status,
            filename = me.template;

        NX.fs.exists(filename).next(function(exists) {

            if(!exists) {

                // 404エラー
                me.error(404);

                return false;
            }

        }).stat(filename).next(function(stat) {

            if(stat.isDirectory()) {
                return false;
            }

            status = stat;

        }).readFile(filename).next(function(data) {

            var pi = NX.fs.pathinfo(filename);
            var stat = status;
            var headers = {
                "Content-Type": NX.config.http.mimetype[pi.extension],
                "Content-Length": stat.size,
                "Last-Modified": stat.mtime.toUTCString(),
                "Cache-Control": "public max-age=" + (maxAge / 1000),
                "ETag": me.etag(stat)
            };


            // テンプレートエンジン処理

//            console.log(values);



            res.writeHead(200, headers);
            res.end(head ? undefined : data);

        }).error(function(e) {

            //console.log(e);

        });

    },

    // }}}
    // {{{ error

    error : function(code) {

        var me = this;
        var req = me.request,
            res = me.response,
            status,
            maxAge = 0;

        file = NX.env.libdir + '/config/' + NX.config.http.errorDocument[code];

        NX.fs.exists(file).next(function(exists) {

            if(!exists) {
                res.writeHead(code);
                res.end();
            }

        })
        .stat(file).next(function(stat) {
            status = stat;
        })
        .readFile(file).next(function(data) {

            var stat = status;
            var headers = {
                "Content-Type": NX.config.http.mimetype.html,
                "Content-Length": stat.size,
                "Last-Modified": stat.mtime.toUTCString(),
                "Cache-Control": "public max-age=" + (maxAge / 1000),
                "ETag": me.etag(stat)
            };

            res.writeHead(code, headers);
            res.end(data);

        }).error(function() {
            res.writeHead(code);
            res.end();
        });

    },

    // }}}
    // {{{ etag

    etag : function(stat) {
        return stat.size + '-' + Number(stat.mtime);
    }

    // }}}

});

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
