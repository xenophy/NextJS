/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.server.Server.$initPath

module.exports = function(config) {

    var me = this,
        execPath = process.NXEnv.dirname;

    if(config.execPath) {
        execPath = config.execPath;
        if(execPath.substr(0,1) !== '/') {
            execPath = require('fs').realpathSync('./') + '/' + execPath;
        }
    }

    // 初期値設定
    NX.applyIf(config, {

        serverId: config.serverId || NX.uid(24),

        next: config.next || NX.emptyFn,

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

    NX.applyIf(config.paths, {
        exec: execPath,
        logs: execPath + '/logs',
        configs: execPath + '/configs',
        modules: execPath + '/modules',
        contents: execPath + '/public',
        public: execPath + '/public',
        controllers: execPath + '/controllers',
        actions: execPath + '/actions'
    });

    for(idx in config.paths) {
        config.paths[idx] = NX.Path.normalize(config.paths[idx]);
    }

    return config;

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
