/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var path = require('path');
var loadConfig = require('./abstract/loadConfig');
var loadGlobalAction = require('./abstract/loadGlobalAction');
var loadScopeAction = require('./abstract/loadScopeAction');
var getActionClass = require('./abstract/getActionClass');
var getModuleConfig = require('./abstract/getModuleConfig');
var getModulePath = require('./abstract/getModulePath');
var getOverrideActionClass = require('./abstract/getOverrideActionClass');
var convertToActionClass = require('./abstract/convertToActionClass');

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
    // {{{ loadConfig

    /**
     * @method loadConfig
     */
    loadConfig : function(type) {
        loadConfig(this, type);
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

        // コントローラー処理開始の準備OK
        me.onReady(me);
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
        var actionName = me.actionName;
        var actionOverride = false;

        // 処理結果初期化
        me.results = {};

        me.action = me[me.actionName];

        // アクションクラスファイルが存在する場合は、優先的に設定を行う
        var oraCls = getOverrideActionClass(me, actionName);

        if(oraCls && !NX.isArray(oraCls)) {

            me.action = new oraCls();
            me.action.controller = me;
            actionOverride = true;

        } else if(NX.isArray(oraCls)) {

            oraCls.forEach(function(cls, i) {

                if(cls instanceof NX.Action) {

                    oraCls[i] = new cls();

                } else if(NX.isString(cls)) {

                    var cls = getActionClass(me, cls);
                    oraCls[i] = new cls();

                } else {

                    throw new Error('invalid action name or object supplied.');

                }

                oraCls[i].controller = me;
            });

            me.action = oraCls;
            actionOverride = true;
        }

        var controllerReady = false;
        var actionExecuted = {};
        var actionReady = {};
        var actionList = [];

        // 実行イベントハンドラ
        me.onExecute = function() {

            me.action.forEach(function(action, i) {
                actionList.push(action);
            });

            // アクション実行
            actionList[0].execute.call(actionList[0], me.request, me.response);
        };

        var ready = function() {

            var ar = true;

            NX.iterate(actionReady, function(key , v) {
                if(actionReady[key] === false) {
                    ar = false;
                    return false;
                }
            });

            if(ar === true && controllerReady === true) {
                me.onExecute();
            }

        };

        // コントローラー準備完了イベントハンドラ
        me.on('controllerready', function() {
            controllerReady = true;
            ready();
        });

        me.on('actionexecuted', function(num) {

            if(actionList.length > ++num) {
                // アクション実行
                actionList[num].execute.call(actionList[num], me.request, me.response);
            } else {

                // データベース接続解除
                actionList.forEach(function(action, i) {
                    NX.iterate(action.__modules, function(name, mod) {
                        var adapter = mod.connection.adapter;
                        if(adapter && mod.connected) {
                            adapter.disconnect();
                        }
                    });
                });

                // アクション終了
                me.emit('end');
            }
        });


        var headActions = [];

        // グローバルアクションが存在する場合、読み込む
        var ga = loadGlobalAction(me);
        if(NX.isArray(ga)) {
            headActions = ga.concat(headActions);
        }

        // スコープアクション読み込み
        var sa = loadScopeAction(me);
        if(NX.isArray(sa)) {
            headActions = sa.concat(headActions);
        }

        // 単一指定の場合
        if(!NX.isArray(me.action)) {
            if(me.action === undefined) {
                me.action = [];
            } else {
                me.action = [me.action];
            }
        }

        // ヘッドアクションと連結
        me.action = headActions.concat(me.action);

        if(me.action.length > 0) {

            // 状態初期化
            me.action.forEach(function(action, i) {
                actionReady[i] = false;
                actionExecuted[i] = false;
            });

            // アクション準備開始
            me.action.forEach(function(action, i) {

                // NX.Actionクラス化
                me.action[i] = action = convertToActionClass(me, action);

                // アクションにモジュールアクセスを追加
                NX.iterate(me.__modules, function(key, v) {
                    action[key] = v;
                });

                // アクション準備完了イベントハンドラ
                action.on('ready', function() {
                    actionReady[i] = true;
                    ready();
                });

                // アクション終了イベントハンドラ
                action.on('end', function() {
                    me.emit('actionexecuted', i);
                });

                // アクションセットアップ
                me.emit('actionsetup', action);

                var controllerModules = me.use;
                var actionModules = action.use;

                // NX.DirectActionの場合は処理しない
                if(action instanceof NX.DirectAction) {
                    actionOverride = true;
                }

                // アクションに設定されているモジュールを読み込み
                if(!NX.isArray(actionModules) && !NX.isArray(controllerModules)) {
                    action.use = [];
                    action.emit('ready');
                    return;
                }

                if(!NX.isArray(actionModules)) {
                    actionModules = [];
                }

                if(!NX.isArray(controllerModules)) {
                    controllerModules = [];
                }

                action.__modules = action.__modules || {};

                var setModules;

                if(!actionOverride) {

                    // コントローラーモジュールと、アクションモジュールをマージ
                    setModules = controllerModules.concat(actionModules);

                    // 重複削除
                    NX.arrayUnique(setModules);

                } else {

                    setModules = actionModules;

                }

                // モジュール準備開始
                var modReady = {};
                setModules.forEach(function(name, i) {

                    var o = getModuleConfig(me, name);
                    setModules[i] = o;
                    name = o.name;

                    if(NX.isDefined(modReady[name])) {
                        throw new Error(name + ' is duplicate module name in controller members.');
                    }

                    modReady[name] = false;
                });

                action.on('bindmodule', function(name, mod) {

                    modReady[name] = true;
                    action[name] = mod;
                    action.__modules[name] = mod;

                    var fullReady = true;
                    NX.iterate(modReady, function(key, v) {
                        if(v !== true) {
                            fullReady = false;
                        }
                    });

                    if(fullReady === true) {
                        action.emit('ready');
                    }
                });

                setModules.forEach(function(o) {

                    var connName = o.connName;
                    var name = o.name;
                    var file = getModulePath(me, name);

                    // キャッシュクリア
                    NX.moduleCacheClear(file);

                    // モジュールファイル読み込み
                    var moduleCls = require(file);

                    // モジュール生成
                    var mod = new moduleCls({
                        controller: me,
                        connName: connName,
                        name: name,
                        __cls: moduleCls,
                        __file: file
                    });

                    mod.on('ready', function() {
                        action.emit('bindmodule', name, mod);
                    });

                    if(mod.autoConnect === true && mod.useTable !== false) {
                    } else {
                        mod.emit('ready');
                    }

                });

            });

        } else {
            me.action = [];
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
