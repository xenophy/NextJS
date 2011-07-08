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

    (function(actions, actionPath, callback) {

        // アクション準備開始
        actions.forEach(function(item, i) {

            var path;

            if(item.extent) {

                var dirs = actionPath.split('/');

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
                path = NX.Path.normalize(root + '/' + actionPath + '/' + item.name + '.js');
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

                    item.define = new NX.app.Action(require(path));

                    item.define.init(paths, req, function() {

                        item.ready = true;
                        callback();

                    });

                });

            });

        });

    })(me.actions, me.actionPath, function() {

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

            chain.push(me.render);

            var idx = 0;

            function actionchain(err) {

                var action = chain[idx++];

                if(action) {

                    req.controller = me;
                    action(req, res, actionchain);

                }
            }
            actionchain();

        }

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
