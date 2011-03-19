/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.server.Cluster.restart

var $METHOD = module.exports = function(sig) {

    var me = this, data = {}, proc = me.spawnMaster();

    me.fireEvent('restarting', data, me);

    proc.sock.write(NX.encode({
        method: 'connectMaster',
        args: [sig || NX.Cluster.signs.SIGQUIT]
    }), 'ascii', me.fd);

    me.on('close', function() {

        proc.sock.write(NX.encode({
            method: 'masterKilled',
            args: [data]
        }), 'ascii');

    });

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
