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

        sess = JSON.parse(sess);

        fn(null, sess);

        /*
         //me.req.session.values = sess;
         //sess = req.session;

         expires = 'string' == typeof sess.cookie.getExpires()
         ? new Date(sess.cookie.getExpires())
         : sess.cookie.getExpires();

         if (!expires || new Date < expires) {
             fn(null, sess);
         } else {
             me.destroy(sid, fn);
         }
         */
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
