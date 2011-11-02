/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.app.Socket.constructor

module.exports = function(config) {

    var me = this,
        socketIO = require('socket.io'),
        socket;

    config = config || {};

    NX.apply(me, config);
    NX.applyIf(me, {
    });

    // スーパークラスメソッドコール
    me.callParent(arguments);

    socket = socketIO.listen(me.server);


    /*
        socket.sockets.on('newListener', function() {
        });
        */

    // ディレクトリ内にあるアクションファイル名でイベントリスナーを登録



    socket.sockets.on('connection', function(client) {


        var id = client.id;
        var cinfo = client.manager.handshaken[id];

        // Cookieキーを取得して、セッションキーと結びつける
    //    console.log(cinfo);

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
