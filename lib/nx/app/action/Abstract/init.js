/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.app.action.Abstract.init

module.exports = function(paths, req, fn) {

    var me = this,
        tmp = [];

    me.uses = me.$bindInit(paths.modules, me.uses);

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

    if(me.uses.length === 0) {

        // モジュール未使用時
        fn();

    } else {

        me.$bind(me.uses, req, callback);

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
