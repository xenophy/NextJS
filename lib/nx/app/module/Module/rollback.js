/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.app.module.Module.rollback

module.exports = function(fn) {

    var me = this;

    if(me.conn.rollback) {
        me.conn.rollback(fn);
    } else {

        // このドライバーでは実装されていないことを通知
        throw new Error("'rollback' is not support driver");

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
