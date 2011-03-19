/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.server.Cluster.spawnMaster

var $METHOD = module.exports = function() {

    var me = this, fds = binding.socketpair(), customFds = [fds[0], 1, 2], env = {};

    delete process.env.NX_CLUSTER_MASTER_PID;
    process.env.NX_CLUSTER_REPLACEMENT_MASTER = 1;
    process.env.NX_CLUSTER_PARENT_PID = me.pid;

    var proc = spawn(node, me.cmd, {
        customFds: customFds
    });

    // ソケット生成
    proc.stdin = new net.Socket(fds[0]);
    proc.sock = new net.Socket(fds[1], 'unix');

    return proc;

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
