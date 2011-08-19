/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.server.log.Access.init

module.exports = function(req, res, next) {

    var me = this;

    var isSSL = false;

    if(req.connection.pair && req.connection.pair._secureEstablished) {
        isSSL = true;
    }

    // レスポンスヘッダー解析
    var resHeaders = {};
    res._header.split("\r\n").forEach(function(line) {

        line = line.split(':');

        var key = NX.util.Format.trim(line[0] || '');
        var value = NX.util.Format.trim(line[1] || '');

        if(key && value) {
            resHeaders[key.toLowerCase()] = value;
        }

    });

    // クッキー解析
    var cookies = {};
    if(req.headers.cookie && NX.isString(req.headers.cookie)) {

        req.headers.cookie.split("; ").forEach(function(item) {

            item = item.split("=");

            var key = item.shift();
            var value = item.join("=");

            cookies[key] = value;

        });

    }

    // リモートアドレス取得
    var remoteAddress;
    if(!isSSL) {
        remoteAddress = req.connection.remoteAddress;
    } else {
        remoteAddress = req.socket.socket.remoteAddress;
    }

    // ローカルアドレス取得
    var localAddress;

    if(!isSSL) {
        localAddress = req.socket.address().address;
    } else {
        localAddress = req.client.pair.servername;
    }

    // レスポンスのバイト数。HTTP ヘッダは除く。
    var responseByte = resHeaders['content-length'];

    // レスポンスのバイト数。HTTP ヘッダは除く。CLF 書式。 すなわち、1 バイトも送られなかったときは 0 ではなく、 '-' になる
    var responseByteCLF = responseByte === 0 ? '-' : responseByte;

    // リクエストを処理するのにかかった時間、マイクロ秒単位
    var requestTime = ~~((res.accessEndTime - res.accessStartTime) * 1000 * 1000);

    // リクエストプロトコル
    var requestProtocol;

    if(!isSSL) {
        requestProtocol = NX.String.format('HTTP/{0}.{1}', req.httpVersionMajor, req.httpVersionMinor);
    } else {
        requestProtocol = NX.String.format('HTTPS/{0}.{1}', req.httpVersionMajor, req.httpVersionMinor);
    }

    // リクエストメソッド
    var requestMethod = req.method;

    // リクエストを扱っているサーバの正式なポート
    var serverPort = req.config.port;

    // リクエストを扱った子プロセスのプロセス ID
    var pid = process.pid;

    // クエリーストリング
    var qs = NX.Url.parse(req.url).query;

    // ステータスコード
    var statusCore = res.statusCode;

    // リクエストを受付けた時刻。 CLF の時刻の書式 (標準の英語の書式)
    var requestTimeCLF = NX.Date.format(res.accessStartDate, 'd/m/Y:H:i:s O');

    NX.apply(me.info, {
        remoteAddress: remoteAddress,
        localAddress: localAddress,
        responseByte: responseByte,
        responseByteCLF: responseByteCLF,
        cookies: cookies,
        requestTime: requestTime,
        requestFile: NX.Url.parse(req.url).pathname,
        requestProtocol: requestProtocol,
        resHeaders:resHeaders,
        serverPort: serverPort,
        pid: pid,
        qs:qs,
        statusCore:statusCore,
        requestTimeCLF:requestTimeCLF
    });

    next();

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
