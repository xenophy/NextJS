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

    // 親マスターPID設定
    me.ppid = process.env.NX_CLUSTER_PARENT_PID ? parseInt(process.env.NX_CLUSTER_PARENT_PID, 10) : null;

    // サーバー設定
    me.server = o.server;

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

    // 設定初期化
    me.initConfig(o);

    // TCPサーバー設定
    me.tcpServer = net.createServer(function(sock) {
        sock.setEncoding('ascii');
        sock.on('data', me.frame.bind(me));
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
