/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.app.module.Module.remove

module.exports = function(o, fn) {

    var me = this;

    if(me.conn.remove) {

        if(me.conn.adapter === 'mongodb') {
            return me.conn.remove.call(this, me.useTable, arguments);
        }

    } else {

        // このドライバーでは実装されていないことを通知
        throw new Error("'remove' is not support driver");

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
