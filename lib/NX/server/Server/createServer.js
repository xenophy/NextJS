/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var http = require('http');

// }}}
// {{{ NX.server.Server.createServer

var $METHOD = module.exports = function() {

    var me = this,
        args = [],
        host = me.getHost(),
        port = me.getPort();

    var server = http.createServer(function(req, res) {

        // requestイベント発火
        me.fireEvent('request', req, res, server);

    });

    if(!NX.isNumber(port)) {
        throw new Error("Invalid port:" + port);
    }

    args.push(port);

    if(host) {
        args.push(host);
    }

    // リスン開始
    server.listen.apply(server, args);

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
