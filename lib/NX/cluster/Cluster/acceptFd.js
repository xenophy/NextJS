/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.server.Cluster.acceptFd

var $METHOD = module.exports = function() {

    var me = this, stdin = new net.Socket(0, 'unix');

    stdin.setEncoding('ascii');
    stdin.on('fd', function(fd){
        self.fd = fd;
        self.start();
    });

    stdin.on('data', me.frame.bind(me));
    stdin.resume();
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
