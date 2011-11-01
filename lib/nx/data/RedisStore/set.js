/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.data.RedisStore.set

module.exports = function(sid, sess, fn) {

    var me = this;

    if(sid) {

        var file = [
            me.prefix,
            sid.replace(/\//g, '%2f').
                replace(/:/g,  '%3a').
                replace(/\*/g, '%2a').
                replace(/\?/g, '%3f').
                replace(/"/g,  '%22').
                replace(/</g,  '%3c').
                replace(/>/g,  '%3e').
                replace(/\|/g, '%7c').
                replace(/\\/g, '%5c'),
            me.serverPort,
            me.sessionKey
        ].join('.');

        var data = JSON.stringify({
            values: sess.values,
            expires: +sess.cookie.expires,
            orig: sess.cookie.originalMaxAge,
            cookie: sess.cookie.config
        });

        var oneDay = 86400;

        var ttl = 'number' == typeof sess.cookie.originalMaxAge
           ? maxAge / 1000 | 0
           : oneDay;

        try {

            me.client.setex(file, ttl, data, function() {
                fn && fn.apply(this, arguments);
            });

        } catch (err) {
            fn && fn(err);
        }

    } else {

        fn && fn();

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
