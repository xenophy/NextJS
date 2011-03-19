/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var http = require('http'),
    https = require('https'),
    fs = require('fs');

// }}}
// {{{ NX.server.Server.createServer

var $METHOD = module.exports = function() {

    var me = this,
        server,
        args = [],
        ssl = me.getSsl(),
        host = me.getHost(),
        port = me.getPort();

    if(!ssl) {

        // サーバー生成
        server = http.createServer(function(req, res) {

            // requestイベント発火
            me.fireEvent('request', req, res, server);

        });

    } else {

        // ポート番号を443に設定
        port = 443;
        me.setPort(port);

        var key = fs.readFileSync(ssl.key);
        var cert = fs.readFileSync(ssl.cert);

        server = https.createServer({
            key: key,
            cert: cert
        }, function(req, res) {

            // requestイベント発火
            me.fireEvent('request', req, res, server);

        });

    }

    if(!NX.isNumber(port)) {
        throw new Error("Invalid port:" + port);
    }

    args.push(port);

    if(host) {
        args.push(host);
    }

    if(me.getCluster()) {

        // クラスタ生成
        me.cluster = new NX.Cluster({
            server: server,
            host: host,
            port: port
        });

    } else {

        // リスン開始
        server.listen.apply(server, args);

    }

    // サーバー設定
    me.setHttpServer(server);

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
