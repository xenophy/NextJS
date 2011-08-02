/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.data.MemoryStore.all

module.exports = function(fn) {

    var me = this,
        arr = [],
        keys = Object.keys(me.sessions);

    for(var i = 0, len = keys.length; i < len; ++i) {

        me.get(keys[i], function(err, v) {
            arr.push(v);

            if(i === keys.length - 1) {
                fn(null, arr);
            }

        });

    }

    if(keys.length === 0) {
        fn(null, arr);
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
