/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.server.MultipartForm.$parseContentType

module.exports = function() {

    var me = this;

    if(!me.headers['content-type']) {
        me.$error(new Error('bad content-type header, no content-type'));
        return;
    }

    if(me.headers['content-type'].match(/urlencoded/i)) {
        me._initUrlencoded();
        return;
    }

    if(me.headers['content-type'].match(/multipart/i)) {

        var m;

        if (m = me.headers['content-type'].match(/boundary=([^;]+)/i)) {

            me.$initMultipart(m[1]);

        } else {
            me.$error(new Error('bad content-type header, no multipart boundary'));
        }

        return;
    }

    me.$error(new Error('bad content-type header, unknown content-type: ' + me.headers['content-type']));

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
