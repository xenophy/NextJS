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
            SIGQUIT: 2
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
        //host: '0.0.0.0',
        host: 'localhost',

        // ポート
        port: 8124,

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
    // {{{ spawnMaster

    /**
     * @method spawnMaster
     */
    spawnMaster: require('./spawnMaster'),

    // }}}
    // {{{ connectMaster

    /**
     * @method connectMaster
     */
    connectMaster: require('./connectMaster'),

    // }}}
    // {{{ remove

    /**
     * @method remove
     */
    remove: require('./remove'),

    // }}}
    // {{{ removeWorker

    /**
     * @method removeWorker
     */
    removeWorker: require('./removeWorker'),

    // }}}
    // {{{ restart

    /**
     * @method restart
     */
    restart: require('./restart'),

    // }}}
    // {{{ masterKilled

    /**
     * @method masterKilled
     */
    masterKilled: require('./masterKilled'),

    // }}}
    // {{{ acceptFd

    /**
     * @method acceptFd
     */
    acceptFd: require('./acceptFd'),

    // }}}
    // {{{ workerException

    /**
     * @method workerException
     */
    workerException: require('./workerException'),

    // }}}
    // {{{ workerTimeout

    /**
     * @method workerTimeout
     */
    workerTimeout: require('./workerTimeout'),

    // }}}
    // {{{ workerWaiting

    /**
     * @method workerWaiting
     */
    workerWaiting: require('./workerWaiting'),

    // }}}
    // {{{ attemptRestart

    /**
     * @method attemptRestart
     */
    attemptRestart: require('./attemptRestart'),

    // }}}
    // {{{ maintainWorkerCount

    /**
     * @method maintainWorkerCount
     */
    maintainWorkerCount: require('./maintainWorkerCount'),

    // }}}
    // {{{ workerKilled

    /**
     * @method workerKilled
     */
    workerKilled: require('./workerKilled'),

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
    // {{{ close

    /**
     * @method close
     */
    close: require('./close'),

    // }}}
    // {{{ call

    /**
     * @method call
     */
    call: require('./call'),

    // }}}
    // {{{ connect

    /**
     * @method connect
     */
    connect: require('./connect'),

    // }}}
    // {{{ kill

    /**
     * @method kill
     */
    kill: require('./kill'),

    // }}}
    // {{{ startListening

    /**
     * @method startListening
     */
    startListening: require('./startListening'),

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
