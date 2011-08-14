/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.smtp.Message.constructor

module.exports = function(config) {

    config = config || {};

    var me = this;

    NX.apply(me, config);
    NX.applyIf(me, {
        attachments: [],
        html: null,
        header: {
            'message-id': '<' + (new Date()).getTime() + '.' + process.pid + '@' + NX.Os.hostname() + '>'
        },
        //content: 'text/plain; charset=utf-8'
        content: 'text/plain; charset=iso-2022-jp'
    });

    var Iconv  = require('iconv-jp').Iconv;
    var iconv = new Iconv('UTF-8', 'ISO-2022-JP');

    NX.iterate(config, function(key, value) {

        if(/^content-type$/i.test(key)) {

            me.content = value;

        } else if(key == 'subject') {

            me.header[key.toLowerCase()] = '=?ISO-2022-JP?B?' + iconv.convert(value).toString("base64") + '?=';

        } else if(key == 'text') {

            me.text = iconv.convert(value).toString();

        } else {

            me.header[key.toLowerCase()] = value;

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
