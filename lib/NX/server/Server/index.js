/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var path = require('path');

// }}}
// {{{ NX.server.Server

/**
 * @class NX.server.Server
 */
NX.define('NX.server.Server', {

    // {{{ mixins

    /**
     * @prop mixins
     */
    mixins: [
        'NX.util.Observable'
    ],

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

        // デフォルトアプリケーションコントローラー名
        appControllerName: 'app',

        // 実行パス
        path: process.NX_ENV.dirname,

        // アクションパス
        actionPath: null,

        // アクション名
        actionName: 'index',

        // アクションディレクトリパス
        actionsPath: path.normalize(process.NX_ENV.dirname + '/actions'),

        // コンフィグディレクトリパス
        configsPath: path.normalize(process.NX_ENV.dirname + '/configs'),

        // モジュールディレクトリパス
        modulesPath: path.normalize(process.NX_ENV.dirname + '/modules'),

        // コントローラーファイルパス
        controllerFilePath: null,

        // コントローラーディレクトリパス
        controllersPath: path.normalize(process.NX_ENV.dirname + '/controllers'),

        // 公開ディレクトリパス
        publicPath: path.normalize(process.NX_ENV.dirname + '/public')

    },

    // }}}
    // {{{ alternateClassName

    /**
     * @prop alternateClassName
     */
    alternateClassName: 'NX.Server',

    // }}}
    // {{{ constructor

    /**
     * @method constructor
     */
    constructor: require('./constructor'),

    // }}}
    // {{{ careteServer

    /**
     * @method createServer
     */
    createServer: require('./createServer'),

    // }}}
    // {{{ onRequest

    /**
     * @method onRequest
     * @private
     */
    onRequest: require('./onRequest')

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
