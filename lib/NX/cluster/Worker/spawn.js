/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var binding = process.binding('net'),
    net = require('net'),
    spawn = require('child_process').spawn;

// }}}
// {{{ NX.server.Worker.spawn

var $METHOD = module.exports = function(id) {

    var me = this,
        fds = binding.socketpair(),
        customFds = [fds[0]].concat(me.master.customFds);

    me.id = id;

    // ワーカープロセス生成
    me.proc = spawn(
        process.execPath,
        me.master.cmd,
        {customFds: customFds}
    );

    // ソケット生成
    me.sock = new net.Socket(fds[1], 'unix');

    return me;
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
