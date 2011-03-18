/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.server.Cluster.start

var $METHOD = module.exports = function() {

    var me = this;

    process.on('SIGINT', me.destroy.bind(me));
    process.on('SIGTERM', me.destroy.bind(me));

    /*
    process.on('SIGQUIT', me.close.bind(me));
    process.on('SIGUSR2', me.attemptRestart.bind(me));
    process.on('SIGCHLD', me.maintainWorkerCount.bind(me));
    */

    // ワーカー数設定
    me.options.workers = me.getWorkers();

    me.tcpServer.listen(me.getSocketPath(), function(){

        // イベント発火
        me.fireEvent('start');

        // 作業ディレクトリ変更
        process.chdir(me.options.workingDir);

        // ワーカー生成
        me.spawn(me.options.workers);
        me.starting = true;
        me.pendingWorkers = me.options.workers;

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
