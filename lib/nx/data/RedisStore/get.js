/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.data.RedisStore.get

module.exports = function(sid, fn) {

    var me = this;
    var expires;
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
//        me.serverPort,
        me.sessionKey
    ].join('.');

    var data;

    me.client.get(file, function(err, data) {

        try {

            if(!data) {
                return fn();
            }

            fn(null, JSON.parse(data.toString()));

        } catch (err) {

            fn(err);

        }

        if(data) {

            // セッション情報の復元
            var sess = NX.JSON.decode(data.toString());

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

    });

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
