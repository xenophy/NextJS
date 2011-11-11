/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.app.action.Abstract.bind

module.exports = function(name, fn) {

    var me = this,
        uses = [];

    if(!NX.isFunction(fn)) {
        fn = NX.emptyFn;
    }

    if(NX.isArray(name)) {
        uses = name;
    } else {
        uses.push(name);
    }

    uses = me.$bindInit(me.paths.modules, uses);

    var callback = function() {

        var all = true;
        uses.forEach(function(item, i) {
            if(!item.ready) {
                all = false;
            }
        });

        if(all) {

            // モジュールをアクションにバインド
            uses.forEach(function(item, i) {
                me[item.name] = item.define;
            });

            fn();
        }

    };

    if(uses.length === 0) {

        // モジュール未使用時
        fn();

    } else {

        me.$bind(uses, me.req, callback);

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
