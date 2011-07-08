/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.app.Action.init

module.exports = function(paths, fn) {

    var me = this;

    var tmp = [];
    me.uses.forEach(function(item) {

        tmp.push({
            name: item,
            path: paths.modules + '/' + item + '.js',
            define: null,
            ready: false
        });

    });
    me.uses = tmp;

    var callback = function() {

        var all = true;
        me.uses.forEach(function(item, i) {
            if(!item.ready) {
                all = false;
            }
        });

        if(all) {

            // モジュールをアクションにバインド
            me.uses.forEach(function(item, i) {
                me[item.name] = item.define;
            });

            fn();
        }

    };

    me.uses.forEach(function(item) {

        NX.Path.exists(item.path, function(exists) {

            if(!exists) {
                item.ready = true;
                return;
            }

            NX.Fs.stat(item.path, function(err, stat) {

                // モジュールキャッシュクリア
                NX.moduleCacheClear(item.path, stat.mtime);

                // モジュール生成
                item.define = new NX.app.Module(require(item.path));

                // 初期化
                item.define.init(paths, function() {

                    item.ready = true;
                    callback();

                });

            });

        });

    });

    // モジュール未使用時
    if(me.uses.length === 0) {
        fn();
    }

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
