/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.app.module.Module.createCollection

module.exports = function(name, fn) {

    var me = this;

    if(me.conn.createCollection) {

        if(me.conn.adapter === 'mongodb') {
            return me.conn.createCollection.call(this, name, fn);
        }

    } else {

        // このドライバーでは実装されていないことを通知
        throw new Error("'createCollection' is not support driver");

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
