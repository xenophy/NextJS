/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.data.Store

NX.define('NX.data.Store', {

    // {{{ regenerate

    regenerate: require('./regenerate'),

    // }}}

    createSession: function(req, o) {

        var session = req.session = NX.create('NX.Session', req, o.values);
        session.resetLastAccess();

        var cookie = session.cookie = NX.create('NX.Cookie', o.cookie);
        cookie.setExpires(new Date(o.expires));
        cookie.setOriginalMaxAge(new Date(o.orig));

        return req.session;

    }

    // }}}

});

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
