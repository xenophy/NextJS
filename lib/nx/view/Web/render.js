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
        dumpinfo = res.$dump;

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

                    var file = process.NXEnv.libdir + '/resources/dump/dump.tpl';

                    me.loadFile(file, function(err, tpl, stat) {

                        if(err) {
                            // TODO: Internal Server Error
                        }

                        tpl = tpl.toString();

                        var isSSL = false;

                        if(req.connection.pair && req.connection.pair._secureEstablished) {
                            isSSL = true;
                        }

                        var host = req.headers.host;
                        var urlBase = isSSL ? 'https://' : 'http://';
                        urlBase += host + '/(-_-)v/';

                        tpl = tpl.replace(/mbContainer_css/g, urlBase + 'scripts/jquery/jquery.mb.containerPlus/css/mbContainer.css');
                        tpl = tpl.replace(/mbContainer_js/g, urlBase + 'scripts/jquery/jquery.mb.containerPlus/inc/mbContainer.js');
                        tpl = tpl.replace(/jquery_js/g, urlBase + 'scripts/jquery/jquery.js');
                        tpl = tpl.replace(/jquery_ui_js/g, urlBase + 'scripts/jquery/jquery-ui.min.js');
                        tpl = tpl.replace(/jquery_metadata_js/g, urlBase + 'scripts/jquery/jquery.mb.containerPlus/inc/jquery.metadata.js');
                        tpl = tpl.replace(/dumodata_insert/g, NX.JSON.encode(dumpinfo));
                        tpl = tpl.replace(/jqGrid_js/g, urlBase + 'scripts/jquery/jquery.jqGrid/js/jquery.jqGrid.min.js');
                        tpl = tpl.replace(/jqGrid_css/g, urlBase + 'scripts/jquery/jquery.jqGrid/css/ui.jqgrid.css');
                        tpl = tpl.replace(/jquery_ui_custom_css/g, urlBase + 'scripts/jquery/jquery.jqGrid/themes/redmond/jquery-ui-1.8.2.custom.css');
                        tpl = tpl.replace(/ui_jqgrid_css/g, urlBase + 'scripts/jquery/jquery.jqGrid/themes/ui.jqgrid.css');
                        tpl = tpl.replace(/ui_multiselect_css/g, urlBase + 'scripts/jquery/jquery.jqGrid/themes/ui.multiselect.css');

                        var tmp = data.toLowerCase();
                        var pos = data.indexOf('</html>');

                        if(pos !== -1) {

                            var newData = data.substr(0, pos);
                            newData += tpl.toString() + data.substr(pos);
                            data = newData;

                        } else {

                            data += tpl.toString();

                        }



                        var size = Buffer.byteLength(data, 'utf8');
                        display(data, size, true);

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
