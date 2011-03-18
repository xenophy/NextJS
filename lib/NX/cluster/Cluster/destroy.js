/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.server.Cluster.destroy

var $METHOD = module.exports = function() {

    var me = this;

    me.tcpServer.on('close', function(){

        // イベント発火
        me.fireEvent('close', me);

        // プロセス終了
        process.nextTick(process.exit.bind(process));

    }).close();

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
