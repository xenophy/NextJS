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

    if(config.bootarg) {
        op = config.bootarg;
    }

    // 初期化
    me.$init(config);

    switch(op) {

        case 'start':
            me.start(config);
        break;

        case 'stop':
            me.stop(config);
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
