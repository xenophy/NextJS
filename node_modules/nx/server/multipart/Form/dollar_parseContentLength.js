/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.server.multipart.Form.$parseContentLength

module.exports = function() {

    var me = this;

    if(me.headers['content-length']) {
        NX.apply(me, {
            bytesReceived: 0,
            bytesExpected: parseInt(me.headers['content-length'], 10)
        });
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
