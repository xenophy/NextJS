/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.util.Session.reload

module.exports = function(fn) {

    var req = this.req;

    req.sessionStore.get(this.id, function(err, sess) {

        if(err) {
            return fn(err);
        }

        if(!sess) {
            return fn(new Error('failed to load session'));
            // TODO: NX.Error.raiseに切り替え
            //return fn(new Error('failed to load session'));
        }

        var expires = sess.cookie.getExpires(),
            orig = sess.cookie.getOriginalMaxAge();

        sess.cookie = new NX.util.Cookie(sess.cookie);

        if('string' == typeof expires) {
            sess.cookie.setExpires(new Date(expires));
        }

        sess.cookie.setOriginalMaxAge(orig);

        req.session = new Session(share, sess);

        fn();
    });

    return this;
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
