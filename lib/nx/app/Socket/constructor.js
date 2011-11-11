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
    config.websocket = config.websocket || {};

    NX.apply(me, config);
    NX.applyIf(me, {
        sessKeyBridge: {}
    });

    // スーパークラスメソッドコール
    me.callParent(arguments);

    // Socket.IOをサーバーにバインド
    socket = socketIO.listen(me.server, config.websocket);

    NX.Fs.readdir(me.paths.sockets, function(err, files) {

        socket.sockets.on('connection', function(client) {

            var id = client.id;
            var cinfo = NX.clone(client.manager.handshaken[id]);

            if(err) {
                return;
            }

            // ディレクトリ内にあるアクションファイル名でイベントリスナーを登録
            files.forEach(function(file) {

                evn = NX.Path.basename(file, '.js');

                (function(name, serverConfig) {

                    client.on(name, function(data) {

                        me.dispatch({
                            serverConfig: serverConfig,
                            name: name,
                            data: data,
                            cinfo: cinfo,
                            paths: me.paths,
                            allowExt: me.allowExt,
                            args: arguments
                        });

                    });

                })(evn, config.serverConfig);

            });

            // ディレクトリ内に変化があった場合、イベントリスナーの追加/削除

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
