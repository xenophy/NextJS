/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.util.Session.constructor

module.exports = function(share, data) {

    NX.apply(this, {
        share: share,
        values: {},
        id: share.sessionID
    });

    if(NX.isObject(data)) {
        NX.apply(this, data);
    } else {
        this.lastAccess = Date.now();
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
