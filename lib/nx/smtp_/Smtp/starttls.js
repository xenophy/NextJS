/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.smtp.Smtp.starttls

module.exports = function(fn) {

    var me = this;

    res = function(err, data) {

        if(!err) {

            var secured_socket = null;
            var secured_timer = null;
            var secured = function() {

                clearTimeout(secured_timer);

                me._secure	= true;
                me.sock		= secured_socket;

                NX.smtp.Response.watch(me.sock);
                fn(err);
            };

            var timeout = function() {
                fn({code:SMTPError.TIMEDOUT, message:"connection timedout during STARTTLS handshake"});
            };

            secured_timer = setTimeout(timeout, me.timeout);
            secured_socket = starttls.secure(me.sock, me.ssl, secured);

        } else {

            fn(err);

        }

    };

    this.command("starttls", res, [220]);
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
