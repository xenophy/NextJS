/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.server.Server.boot

module.exports = function(config) {

    config = config || {};

    var me = this,
    args = process.argv,
    op = (args[2] || "").toLowerCase(),
    execPath = process.NXEnv.dirname;

    // 初期値設定
    NX.applyIf(config, {

        // コントローラータイプ
        controllerType: 'Web',

        // アクション名
        actionName: 'index',

        // パス
        paths: {},

        // デーモン化
        enableDaemon: true,

        // ポート番号
        port: 3000,

        // ホスト
        host: '0.0.0.0',

        // SSL設定
        ssl: false,

        // ワーカー数
        workers: require('os').cpus().length,

        // バックログ
        backlog: 128,

        // プロセスロックファイル
        lockFile: '/tmp/nxd.pid',

        // プロセスログファイル
        logFile: '/tmp/nxd.log'
    });

    NX.apply(config.paths, {
        exec: execPath,
        configs: execPath + '/configs',
        modules: execPath + '/modules',
        contents: execPath + '/public',
        controllers: execPath + '/controllers',
        actions: execPath + '/actions'
    });

    for(idx in config.paths) {
        config.paths[idx] = NX.Path.normalize(config.paths[idx]);
    }

    if(!NX.isObject(config.ssl)) {
        config.ssl = false;
    } else {
        NX.applyIf(config.ssl, {
            host: '0.0.0.0'
        });
    }

    // セッション設定初期化
    if(!NX.isObject(config.session)) {
        config.session = {};
    }

    NX.applyIf(config.session, {
        key: 'nextjs.sid',
        secret: process.NXEnv.sessionSecret,
    });

    if(!NX.isObject(config.session.cookie)) {
        config.session.cookie = {};
    }

    NX.applyIf(config.session.cookie, {
        path: '/',
        httpOnly: true,
        maxAge: 14400000
    });

    if(!NX.isObject(config.session.gc)) {
        config.session.gc = {};
    }

    NX.applyIf(config.session.gc, {
        probability: 1,
        divisor: 1000,
        maxAge: 14400000
    });

    me.config = config;

    switch(op) {

        case 'start':
            me.start();
        break;

        case 'stop':
            me.stop();
        break;

        default:
            console.log('Usage: [start|stop]');
    }

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
