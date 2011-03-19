/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var sys = require('sys');

// }}}
// {{{ NX.server.ServerManager.createServers

var $METHOD = module.exports = function() {

    var me = this;

    me.each(function(name, server) {

        // サーバー生成
        server.createServer();

        // requestイベントハンドラ
        server.on('request', server.onRequest);

        //sys.puts(name + ' Server created.');

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
