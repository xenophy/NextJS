/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.server.ServerManager

/**
 * @class NX.server.ServerManager
 */
NX.define('NX.server.ServerManager', {

    // {{{ config

    /**
     * @prop config
     */
    config: {

        // ロックファイル名
        lockFile: '/tmp/nxd.pid',

        // ログファイル名
        logFile: '/tmp/nxd.log'
    },

    // }}}
    // {{{ extend

    /**
     * @prop extend
     */
    extend: 'NX.AbstractManager',

    // }}}
    // {{{ singleton

    /**
     * @prop singleton
     */
    singleton: true,

    // }}}
    // {{{ initReg

    initReg: false,

    // }}}
    // {{{ createServers

    /**
     * @method createServers
     */
    createServers: require('./createServers'),

    // }}}
    // {{{ initDaemon

    /**
     * @method initDaemon
     * @private
     */
    initDaemon : require('./initDaemon'),

    // }}}
    // {{{ constructor

    /**
     * @method constructor
     */
    constructor: require('./constructor'),

    // }}}
    // {{{ register

    /**
     * @method register
     */
    register: require('./register')

    // }}}

}, function() {

    // {{{ regServer

    /**
     * @method regServer
     */
    NX.regServer = function(o) {

        if(NX.isArray(o)) {
            o.forEach(function(options) {
                NX.server.ServerManager.register.call(NX.server.ServerManager, options, o.length);
            });
        } else {
            NX.server.ServerManager.register.call(NX.server.ServerManager, o, 1);
        }

    };

    // }}}

});

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
