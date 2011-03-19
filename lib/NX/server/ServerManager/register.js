/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.server.ServerManager.register

var $METHOD = module.exports = function(options, cnt) {

    var me = this,
        server = new NX.Server(options);

    me.all.add(me.all.length, server);

    if(cnt === me.all.length) {
        me.initReg = true;
        me.initDaemon();
    }

    return server;
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
