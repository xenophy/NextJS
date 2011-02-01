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
            connName = name.connection || 'default';
            name = name.name;
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

        if(mod.autoConnect === true && mod.useTable !== false) {
        } else {
            mod.emit('ready');
        }

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

        me.on('ready', function() {
            me.onReady(me);
        });

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
            me.__modules[name] = mod;

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

            if(NX.isObject(name)) {
                name = name.name;
            }

            if(NX.isDefined(modReady[name])) {
                throw new Error(name + ' is duplicate module name in controller members.');
            }

            modReady[name] = false;

        });

        NX.each(me.use, function(name) {
            me.bindModule(name);
        }, me);

        if(me.use.length === 0) {
            me.emit('ready');
        }
    },

    // }}}
    // {{{ onExecute

    onExecute: NX.emptyFn,

    // }}}
    // {{{ execute

    /**
     * @method execute
     */
    execute : function() {

        var me = this;
        var actionName = me.action;
        me.action = me[me.action];

        // 処理結果初期化
        me.results = {};

        // アクションクラスファイルが存在する場合は、優先的に設定を行う
        var oraCls;
        try {
            var amp = path.normalize([
                me.controllerPath,
                me.actionPath,
                actionName
            ].join('/'));

            amp += '.action.js';

            // キャッシュクリア
            NX.moduleCacheClear(amp);

            oraCls = require(amp);
        } catch(e) {}

        if(oraCls) {
            me.action = new oraCls();
            me.action.controller = me;
        }

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

            if(me.action) {

                var actionReady = false;
                var controllerReady = false;
                var f = function() {
                    if(actionReady && controllerReady) {
                        me.onExecute();
                    }
                };

                me.action.on('ready', function() {
                    actionReady = true;
                    f();
                });

                me.action.on('controllerready', function() {
                    controllerReady = true;
                    f();
                });
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
                        adapter.disconnect();
                    }
                });

            });

            if(me.action instanceof NX.DirectAction) {
                me.action.emit('ready');
                return;
            }


            // アクションに設定されているモジュールを読み込み
            if(!NX.isArray(me.action.use)) {
                me.action.use = [];
            }

            var modReady = {};
            NX.each(me.action.use, function(name) {

                if(NX.isObject(name)) {
                    name = name.name;
                }

                if(NX.isDefined(modReady[name])) {
                    throw new Error(name + ' is duplicate module name in controller members.');
                }

                modReady[name] = false;
            });

            me.action.on('bindmodule', function(name, mod) {

                modReady[name] = true;

                me.action[name] = mod;

                var fullReady = true;
                NX.iterate(modReady, function(key, v) {
                    if(v !== true) {
                        fullReady = false;
                    }
                });

                if(fullReady === true) {
                    me.action.emit('ready');
                }
            });

            me.action.use.forEach(function(name) {

                var connName = 'default';

                if(NX.isObject(name)) {
                    connName = name.connection || 'default';
                    name = name.name;
                }

                var file = path.normalize(me.modulePath + '/' + name + '.js');

                // キャッシュクリア
                NX.moduleCacheClear(file);

                // モジュールファイル読み込み
                var moduleCls = require(file);

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
                    me.action.emit('bindmodule', name, mod);
                });

                if(mod.autoConnect === true && mod.useTable !== false) {
                } else {
                    mod.emit('ready');
                }

            });

            if(me.action.use.length === 0) {
                me.action.emit('ready');
            }
        }

    },

    // }}}
    // {{{ setTemplate

    setTemplate : function(file) {

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
