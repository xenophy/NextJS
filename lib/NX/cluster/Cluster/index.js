/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var os = require('os');

// }}}
// {{{ NX.cluster.Cluster

/**
 * @class NX.cluster.Cluster
 */
NX.define('NX.cluster.Cluster', {

    // {{{ statics

    /**
     * @prop statics
     */
    statics: {
        signs: {
            KILL: 1,
        },
        status: {
            HARD_SHUTDOWN: 1,
            GRACEFUL_SHUTDONW: 2
        }
    },

    // }}}
    // {{{ config

    /**
     * @prop config
     */
    config: {

        // ホスト
        host: '0.0.0.0',

        // ポート
        port: 8124,

        // HTTPサーバーオブジェクト
        httpServer: null,

        // ワーカー数
        workers: os.cpus().length,

        // ソケットパス
        socket: null

    },

    // }}}
    // {{{ mixins

    /**
     * @prop mixins
     */
    mixins: [
        'NX.util.Observable',
        'NX.cluster.Receiver'
    ],

    // }}}
    // {{{ alternateClassName

    /**
     * @prop alternateClassName
     */
    alternateClassName: 'NX.Cluster',

    // }}}
    // {{{ constructor

    /**
     * @method constructor
     */
    constructor: require('./constructor'),

    // }}}
    // {{{ listen

    /**
     * @method listen
     */
    listen: require('./listen'),

    // }}}
    // {{{ createSocket

    /**
     * @method createSocket
     */
    createSocket: require('./createSocket'),

    // }}}
    // {{{ getSocketPath

    /**
     * @method getSocketPath
     */
    getSocketPath: require('./getSocketPath'),

    // }}}
    // {{{ start

    /**
     * @method start
     */
    start: require('./start'),

    // }}}
    // {{{ spawn

    /**
     * @method spawn
     */
    spawn: require('./spawn'),

    // }}}
    // {{{ spawnWorker

    /**
     * @method spawnWorker
     */
    spawnWorker: require('./spawnWorker'),

    // }}}
    // {{{ kill

    /**
     * @method kill
     */
    kill: require('./kill'),

    // }}}
    // {{{ destroy

    /**
     * @method destroy
     */
    destroy: require('./destroy'),

    // }}}
    // {{{ onDestroy

    /**
     * @method onDestroy
     * @private
     */
    onDestroy: require('./onDestroy')

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
