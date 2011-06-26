/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.app.AbstractController.init

module.exports = function() {

    var me = this;

    me.actions.push({
        name: me.action,
        define: false,
        ready: false
    });

    var root = me.paths.actions;
    var urlpath = me.paths.urlpath;

    (function(actions, actionPath, callback) {

        // アクション準備開始
        actions.forEach(function(item, i) {

            var path = NX.Path.normalize(root + '/' + actionPath + '/' + item.name + '.js');

            NX.Path.exists(path, function(exists) {

                if(!exists) {
                    item.ready = true;
                    callback();
                    return;
                }

                item.define = new NX.app.Action(require(path));
                item.ready = true;
                callback();

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

            // アクションクラスの準備がすべて整ったのでモジュールの準備を開始する

            me.onReady();
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
