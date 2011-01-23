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
        me.configs = me.configs || me.path + '/configs';
        me.configs = path.normalize(me.configs);

        // モジュールパス初期化
        me.modules = me.modules || me.path + '/modules';
        me.modules = path.normalize(me.modules);

        // コンテンツパス初期化
        me.contents = me.contents || me.path + '/public_html';
        me.contents = path.normalize(me.contents);

        // コントローラーディレクトリ初期化
        me.controllers = me.controllers || me.path + '/controllers';
        me.controllers = path.normalize(me.controllers);
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
