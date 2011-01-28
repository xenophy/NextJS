/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var fs = require('fs'),
    path = require('path');

// }}}
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

        if(filename === false) {
            return;
        }

        path.exists(filename, function(exists) {

            if(!exists) {

                // 404エラー
                me.error(404);
                return false;

            }

            fs.stat(filename, function(err, stat) {

                /*
                if(stat.isDirectory()) {
                    return false;
                }
                */

                status = stat;

                fs.readFile(filename, function(err, data) {

                    var stat = status;

                    // TODO:テンプレートの拡張子設定

                    if(path.extname(filename) === '.html') {

                        // テンプレートエンジン処理

                        var tpl = new NX.Template({path : me.path});
                        var html = tpl.fetch(data.toString(), values);
                        data = new Buffer(html, encoding='utf8');

                    }

                    var headers = {
                        "Content-Type": me.mimetype[path.extname(filename).substr(1)] + '; charset=utf-8' ,
                        "Content-Length": data.length,
                        "Last-Modified": stat.mtime.toUTCString(),
                        "Cache-Control": "public max-age=" + (maxAge / 1000),
                        "ETag": me.etag(stat)
                    };

                    res.writeHead(200, headers);
                    if(!head) {
                        res.write(data)
                    }
                    res.end();
                });
            });
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

        file = process.NXEnv.libdir + '/config/' + me.errorDocument[code];

        // ファイル存在確認
        path.exists(file, function(exists) {

            if(exists) {

                fs.stat(file, function(err, stat) {

                    status = stat;

                    fs.readFile(file, function(err, data) {

                        var stat = status;
                        var headers = {
                            "Content-Type": me.mimetype.html,
                            "Content-Length": stat.size,
                            "Last-Modified": stat.mtime.toUTCString(),
                            "Cache-Control": "public max-age=" + (maxAge / 1000),
                            "ETag": me.etag(stat)
                        };

                        res.writeHead(code, headers);
                        res.end(data);

                    });
                });

            }

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
