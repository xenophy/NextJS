/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.app.module.Module.insert

module.exports = function(o, fn) {

    var me = this;

    if(me.conn.insert) {
        me.conn.insert(me.useTable, o, fn);
    } else {

        // このドライバーでは実装されていないことを通知
        throw new Error("'insert' is not support driver");

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
