/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.app.controller.Abstract.initAction

module.exports = function(req, res, next) {

    var me = this,
        paths = me.paths,
        root = paths.actions,
        urlpath = paths.urlpath,
        len,
        file,
        path,
        files = [];

    // グローバルアクションJSファイル名取得
    file = NX.Path.normalize(root + '/global.action.js');

    try {

        path = null;

        if(require(file)) {
            path = file;
        }

    } catch(e) {
    }

    if(path) {
        files.push({
            type: 'global',
            path: path
        });
    }

    // エクテントアクションJSファイル名取得
    var dirs = me.actionPath.split('/');

    while(dirs.length > 0) {

        var dir = NX.Path.normalize(root + '/' + dirs.join('/') + '/');
        var file = dir + 'extent.action.js';

        try {

            if(require(file)) {
                path = file;
            }

        } catch(e) {
        }

        if(path) {
            break;
        }

        dirs.pop();
    }

    if(path) {
        files.push({
            type: 'extent',
            path: path
        });
    }

    // アクションJSファイル名取得
    file = NX.Path.normalize(root + '/' + me.actionPath + '/' + me.action + '.js');

    try {

        path = null;

        if(require(file)) {
            path = file;
        }

    } catch(e) {
    }

    if(path) {
        files.push({
            type: 'default',
            path: path
        });
    }

    var callback = function() {

        var all = true;
        me.actions.forEach(function(item, i) {
            if(!item.ready) {
                all = false;
            }
        });

        if(all) {

            // アクションチェーン生成
            var temp = [];

            me.actions.forEach(function(action, i) {
                if(action.define) {
                    temp.push(action);
                }
            });

            me.actions = temp;

            var chain = [];

            me.actions.forEach(function(action, i) {

                var exec = action.define.$execute();
                exec.$actionName = action.name;

                chain.push(exec);
            });

            me.actionChain = chain;

            // 次へ
            next();

        }

    };

    // インスタンス生成コールバック関数
    var makeInstance = function() {

        me.actions.forEach(function(o, i) {

            var actionsrc = o.$src;

            if(NX.isString(actionsrc)) {
                actionsrc = NX.create(actionsrc);
            }

            // アクションインスタンス
            o.define = NX.create('NX.app.action.' + me.controllerType, actionsrc);

            // アクション初期化
            o.define.init(paths, req, function() {

                o.ready = true;
                callback();

            });

        });

    };

    // アクションチェーン初期化
    me.actions = [];

    files.forEach(function(o, i) {

        var len = i;
        var path = o.path;
        var type = o.type;

        NX.Path.exists(path, function(exists) {

            if(!exists) {

                if(len === files.length - 1) {
                    makeInstance();
                }

            } else {

                NX.Fs.stat(path, function(err, stat) {

                    if(err) {

                        if(len === files.length - 1) {
                            makeInstance();
                        }

                    }

                    // モジュールキャッシュクリア
                    NX.moduleCacheClear(path, stat.mtime);

                    var actionsrc;

                    try {

                        actionsrc = require(path);

                    } catch(e) {

                        // {{{ 500エラー

                        res.$errorCode = 500;
                        res.$errorDetails = {
                            msg: e.message,
                            stack: e.stack
                        };

                        // 次へ
                        next();

                        // }}}

                        return;

                    }

                    // 配列判定
                    if(NX.isArray(actionsrc)) {

                        actionsrc.forEach(function(src, i) {

                            var o = {
                                name: me.action + i,
                                type: type,
                                $src: src,
                                define: false,
                                ready: false
                            };

                            me.actions.push(o);

                        });

                    } else {

                        var o = {
                            name: me.action,
                            type: type,
                            $src: actionsrc,
                            define: false,
                            ready: false
                        };

                        me.actions.push(o);

                    }

                    if(len === files.length - 1) {
                        makeInstance();
                    }

                });

            }

        });

    });

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
