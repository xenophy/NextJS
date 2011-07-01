/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.data.MemoryStore.set

module.exports = function(sid, sess, fn) {

    var me = this;

    if(sid) {

        me.sessions[sid] = JSON.stringify({
            values: sess.values,
            expires: sess.cookie.getExpires(),
            orig: sess.cookie.getOriginalMaxAge(),
            cookie: sess.cookie.config
        });

    }

    fn && fn();

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
