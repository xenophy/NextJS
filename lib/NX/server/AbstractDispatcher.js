/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var path = require('path');

// }}}
// {{{ namespace

NX.ns('NX.server');

// }}}
// {{{ NX.server.AbstractDispatcher

/**
 * @class NX.server.AbstractDispatcher
 */
NX.server.AbstractDispatcher = NX.extend(require('events').EventEmitter, {

    // {{{ appControlerName

    appControlerName : 'app',

    // }}}
    // {{{ requestPath

    /**
     * @prop requestPath
     */
    requestPath : '',

    // }}}
    // {{{ action

    action : '',

    // }}}
    // {{{ constructor

    /**
     * @method AbstractDispatcher
     */
    constructor : function(config) {

        var me = this;

        config = config || {};

        // 設定適用
        NX.apply(me, config);

        // スーパークラスメソッドコール
        NX.server.AbstractDispatcher.superclass.constructor.apply(me, arguments);

        // 実行パス初期化
        me.path = me.path || process.NXEnv.dirname;

        // コンフィグパス初期化
        me.configsPath = me.configsPath || me.path + '/configs';
        me.configsPath = path.normalize(me.configsPath);

        // モジュールパス初期化
        me.modulesPath = me.modulesPath || me.path + '/modules';
        me.modulesPath = path.normalize(me.modulesPath);

        // コンテンツパス初期化
        me.contentsPath = me.contentsPath || me.path + '/public_html';
        me.contentsPath = path.normalize(me.contentsPath);

        // コントローラーディレクトリ初期化
        me.controllersPath = me.controllersPath || me.path + '/controllers';
        me.controllersPath = path.normalize(me.controllersPath);

        // アクションディレクトリ初期化
        me.actionsPath = me.actionsPath || me.path + '/actions';
        me.actionsPath = path.normalize(me.actionsPath);
    },

    // }}}
    // {{{ dispatch

    /**
     * @method dispatch
     */
    dispatch : NX.emptyFn

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
