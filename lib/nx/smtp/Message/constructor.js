/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.smtp.Message.constructor

module.exports = function(config) {

    config = config || {};

    var me = this,
        parse = NX.smtp.Address.parse;

    NX.apply(me, config);
    NX.applyIf(me, {
        charset: 'iso-2022-jp',
        attachments: [],
        html: null,
        header: {
            'message-id': '<' + (new Date()).getTime() + '.' + process.pid + '@' + NX.Os.hostname() + '>'
        }
    });

    NX.applyIf(me, {
        content: 'text/plain; charset=' + me.charset.toLowerCase()
    });

    NX.iterate(config, function(key, value) {

        if(/^content-type$/i.test(key)) {

            me.content = value;

        } else if(key == 'attachments') {

        } else if(key == 'to' || key == 'from') {

            var obj = parse(value)[0];

            if(obj.label) {

                obj.label = NX.String.format(
                    '=?{0}?B?{1}?=',
                    me.charset.toUpperCase(),
                    NX.Encode.convert(obj.label, 'UTF-8', me.charset.toUpperCase()).toString("base64")
                );

                value = obj.label + ' <' + obj.address + '>';

            }

            me.header[key.toLowerCase()] = value;

        } else if(key == 'subject') {

            if(me.charset.toUpperCase() === 'UTF-8') {
                me.header[key.toLowerCase()] = value;
            } else {
                me.header[key.toLowerCase()] = NX.String.format(
                    '=?{0}?B?{1}?=',
                    me.charset.toUpperCase(),
                    NX.Encode.convert(value, 'UTF-8', me.charset.toUpperCase()).toString("base64")
                );
            }

        } else if(key == 'text') {

            if(me.charset.toUpperCase() === 'UTF-8') {
                me.text = value;
            } else {
                me.text = NX.Encode.convert(value, 'UTF-8', me.charset.toUpperCase());
            }

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
