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

NX.ns('NX.controller');

// }}}
// {{{ NX.controller.AbstractController

/**
 * @class NX.controller.AbstractController
 */
NX.controller.AbstractController = NX.extend(require('events').EventEmitter, {

    // {{{ results

    results : {},

    // }}}
    // {{{ bindModule

    /**
     * @method bindModule
     */
    bindModule : function(name) {

        var me = this,
            connName = 'default';

        if(NX.isObject(name)) {
            var o = name;
            connName = o.connection || 'default';
            name = o.name;
        }

        var file = path.normalize(me.modulePath + '/' + name + '.js');

        // キャッシュクリア
        NX.moduleCacheClear(file);

        // モジュールファイル読み込み
        moduleCls = require(file);

        // モジュール生成
        var mod = new moduleCls({
            controller: me,
            connName: connName,
            name: name,
            __cls: moduleCls
        });

        mod.on('ready', function() {

            /**
             * @event bindmodule
             */
            me.emit('bindmodule', name, mod);
        });

        if(me[name]) {
            throw new Error(name + ' is duplicate module name in controller members.');
        }
        me.__modules[name] = mod;

    },

    // }}}
    // {{{ loadConfig

    /**
     * @method loadConfig
     */
    loadConfig : function(type) {

        var me = this;

        type = type.toLowerCase();

        try {
            me.config[type] = require(path.normalize(me.configPath + '/' + NX.capitalize(type) + 'Config.js'));
        } catch(e) {
            me.config[type] = require('../config/' + type + '.js');
        };

    },

    // }}}
    // {{{ constructor

    /**
     * @method AbstractController
     */
    constructor : function() {

        var me = this;

        // スーパークラスメソッドコール
        NX.controller.AbstractController.superclass.constructor.apply(me, arguments);

        // ユーザー設定読み込み
        me.config = {};
        NX.each(['database', 'view'], function(type) {
            me.loadConfig(type);
        });

        // モジュール生成
        if(!NX.isArray(me.use)) {
            me.use = [];
        }

        me.__modules = {};

        var modReady = {};

        me.on('bindmodule', function(name, mod) {
            modReady[name] = true;

            var fullReady = true;
            NX.iterate(modReady, function(key, v) {
                if(v !== true) {
                    fullReady = false;
                }
            });

            if(fullReady === true) {
                me.emit('ready');
            }
        });

        // バインドモジュール
        NX.each(me.use, function(name) {
            modReady[name] = false;
            me.bindModule(name);
        }, me);
    },

    // }}}
    // {{{ execute

    /**
     * @method execute
     */
    execute : function() {

        var me = this;
        me.action = me[me.action];

        // 処理結果初期化
        me.results = {};

        if(me.action) {

            // NX.Actionクラス化
            if(!(me.action instanceof NX.Action)) {
                var a = new NX.Action();
                a.controller = me;
                a.execute = me.action;
                me.action = a;
            } else {
                me.action.controller = me;
            }

            // アクションにモジュールアクセスを追加
            NX.iterate(me.__modules, function(key, v) {
                me.action[key] = v;
            });

            // アクション実行終了イベントハンドラ
            me.on('end', function() {

                NX.iterate(me.__modules, function(key, v) {
                    var adapter = v.connection.adapter;
                    if(adapter) {
                        console.log(me.request.url);
                        console.log("disconnect()");
                        adapter.disconnect();
                    }
                });

            });

        }

    }

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
