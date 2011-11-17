/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.server.Server.onUncaughtException

module.exports = function(err) {

    var req = NX.currentRequest;
    var res = NX.currentResponse;

    // 標準出力へエラーを出力
    console.log(err);

    // エラードキュメントファイルパス取得
    file = NX.WebView.errorDocument[500];

    // ヘッダー送信
    res.writeHead(500, {
        "Content-Type": NX.WebView.mimetype.html,
    });

    var data = NX.Fs.readFileSync(file);
    data = data.toString();
    data = data.replace(/\<!--\{msg\}--\>/g, err.message);
    data = data.replace(/\<!--\{stack\}--\>/g, err.stack);

    if(res.$dump && res.$dump.length > 0)  {

        file = process.NXEnv.libdir + '/resources/dump/dump.tpl';

        info = res.$dump;

        var tpl = NX.Fs.readFileSync(file);
        tpl = tpl.toString();

        var isSSL = false;

        if(req.connection.pair && req.connection.pair._secureEstablished) {
            isSSL = true;
        }

        var host = req.headers.host;
        var urlBase = isSSL ? 'https://' : 'http://';
        urlBase += host + '/(-_-)v/';

        data = NX.view.Web.getDumpHtml({
            urlBase: urlBase,
            info: info,
            tpl: tpl,
            data: data
        });

    }

    res.end(data);

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
