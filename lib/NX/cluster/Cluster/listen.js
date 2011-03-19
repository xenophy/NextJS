/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var net = require('net');

// }}}
// {{{ NX.server.Cluster.listen

var $METHOD = module.exports = function() {

    var me = this;

    if(me.isMaster) {

        if(me.isChild) {

            me.acceptFd();

        } else {

            // ソケット生成
            me.createSocket(function(o) {

                if(o.err) {
                    throw err;
                }

                me.fd = o.fd;
                me.start();

            });

        }

    } else {

        // ワーカー生成
        var worker = new NX.Worker(me);

        // ソケット接続
        me.sock = net.createConnection(me.getSocketPath());
        me.sock.on('connect', function(){
            worker.start();
        });

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
