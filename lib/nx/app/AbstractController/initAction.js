/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.app.AbstractController.initAction

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
                chain.push(action.define.$execute());
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

                // アクションインスタンス
                item.define = NX.create('NX.app.Action', require(path));

                // アクション初期化
                item.define.init(paths, req, function() {

                    item.ready = true;
                    callback();

                });

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