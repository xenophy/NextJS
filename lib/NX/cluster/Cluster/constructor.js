/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var net = require('net'),
    spawn = require('child_process').spawn,
    dirname = require('path').dirname;

// }}}
// {{{ NX.server.Cluster.constructor

var $METHOD = module.exports = function(o) {

    var me = this;

    // 子プロセス（ワーカー）配列
    me.children = [];

    // カスタムワーカーFDS
    me.customFds = [1, 2];

    // サーバー情報取得
    me.cmd = process.argv.slice(1);
    me.dir = dirname(me.cmd[0]);

    // オプション設定
    me.options = {
        backlog: 128,
        workingDir: me.dir,
        socketPath: me.dir,
        timeout: 60000,
        restartThreshold: 60000,
        restartTimeout: 60000
    };

    // ワーカー判定
    me.isWorker = !! process.env.NX_CLUSTER_MASTER_PID;

    // 子プロセス判定
    me.isChild = me.isWorker || !! process.NX_ENV.REPLACEMENT_MASTER;

    // マスター判定
    me.isMaster = ! me.isWorker;

    // プロセスID設定
    me.pid = process.pid;

    if(me.isMaster) {

        // マスタープロセスID設定
        process.env.NX_CLUSTER_MASTER_PID = me.pid;

    }

    // イベント定義
    me.addEvents('start', 'close', 'closing', 'kill');


    /*
  (process.NX_ENV.MASTER_PID || me.pid);
  return this.options['socket path'] + '/cluster.' + pid + '.sock';
  */

    // 設定初期化
    me.initConfig(NX.applyIf(o, {
    }));



    // ソケットパス設定



    /*
var net = require('net');

var server = net.createServer(function (socket) {
  socket.write("Echo server\r\n");
  socket.pipe(socket);
})

server.listen(8124, "127.0.0.1");
*/

/*
    console.log("----");
    console.log(o.server.listenFD.bind);
    console.log("----");

    */

    // TCPサーバー設定
    me.tcpServer = net.createServer(function(sock) {

        console.log("sock?");

    });

    // リスン
    me.listen();

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
