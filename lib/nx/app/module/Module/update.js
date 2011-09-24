/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.app.module.Module.update

module.exports = function(o, fn) {

    var me = this;

    if(me.conn.update) {

        if(me.conn.adapter === 'mongodb') {
            return me.conn.update.call(this, me.useTable, arguments);
        } else {
            me.conn.update(me.useTable, o, fn);
        }

    } else {

        // このドライバーでは実装されていないことを通知
        throw new Error("'update' is not support driver");

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
