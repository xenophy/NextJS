/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.data.FileStore.all

module.exports = function(fn) {

    var arr = [],
        keys = Object.keys(this.sessions);

    for(var i = 0, len = keys.length; i < len; ++i) {

        this.get(keys[i], function(err, v) {
            arr.push(v);
        });

    }

    fn(null, arr);
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
