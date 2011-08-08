/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.smtp.Smtp.command

module.exports = function(cmd, fn, codes) {

    codes = Array.isArray(codes) ? codes : typeof(codes) == 'number' ? [codes] : [250];

    var res = function(err, data) {

        var msg = NX.smtp.Response.parse(data);

        if(err) {

            fn(err);

        } else if(codes.indexOf(Number(msg.code)) != -1) {

            fn(err, data);

        } else {

            console.log("error");

        }

    };

    this.send(cmd + NX.smtp.Smtp.CRLF, res);

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
