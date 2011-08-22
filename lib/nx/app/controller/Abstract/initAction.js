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
        urlpath = paths.urlpath;

    me.actions.push({
        name: 'global.action',
        global: true,
        define: false,
        ready: false
    },{
        name: 'extent.action',
        extent: true,
        define: false,
        ready: false
    },{
        name: me.action,
        define: false,
        ready: false
    });

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

    // アクション準備開始
    me.actions.forEach(function(item, i) {

        var path;

        if(item.extent) {

            var dirs = me.actionPath.split('/');

            while(dirs.length > 0) {

                var dir = NX.Path.normalize(root + '/' + dirs.join('/') + '/');
                var file = dir + item.name + '.js';

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

            if(!path) {
                item.ready = true;
                callback();
                return;
            }

        } else if(item.global) {

                path = NX.Path.normalize(root + '/' + item.name + '.js');

        } else {

            path = NX.Path.normalize(root + '/' + me.actionPath + '/' + item.name + '.js');

        }

        NX.Path.exists(path, function(exists) {

            if(!exists) {
                item.ready = true;
                callback();
                return;
            }

            NX.Fs.stat(path, function(err, stat) {

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

                    var name = item.name;

                    me.actions.pop();

                    actionsrc.forEach(function(src, i) {

                        var o = {
                            name: item.name + i,
                            $src: src,
                            ready: false
                        };

                        me.actions.push(o);

                    });

                    me.actions.forEach(function(item) {

                        if(!item.extent && !item.global) {

                            // TODO: srcがオブジェクトではなくアクションインスタンスの場合は、そのまま追加
                            item.define = NX.create('NX.app.action.' + me.controllerType, item.$src);
                            item.define.init(paths, req, function() {

                                item.ready = true;
                                callback();

                            });

                        }

                    });

                } else {

                    // TODO: srcがオブジェクトではなくアクションインスタンスの場合は、そのまま追加

                    // アクションインスタンス
                    item.define = NX.create('NX.app.action.' + me.controllerType, actionsrc);

                    // アクション初期化
                    item.define.init(paths, req, function() {

                        item.ready = true;
                        callback();

                    });

                }

            });

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
