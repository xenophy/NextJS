/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.data.MemoryStore.get

module.exports = function(sid, fn) {

    var me = this;
    var expires, sess = me.sessions[sid];

    if(sess) {

        // セッション情報の復元
        sess = NX.JSON.decode(sess);

        expires = +new Date(sess.expires);

        if(!expires || new Date < expires) {

            fn(null, sess);

        } else {

            // 期限切れにつきセッションを破棄
            me.destroy(sid, fn);

        }

    } else {
        fn();
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
