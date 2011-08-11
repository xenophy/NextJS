/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.smtp.Smtp.send

module.exports = function(msg, fn) {

    var me = this;

    fn = fn || NX.emptyFn;

    if(me.sock && me.state == NX.smtp.Smtp.CONNECTED) {

        var res = function(err, data) {

            if(err) {
                self.close(true);
            } else {
                fn(err, data);
            }

        };

        me.sock.once('response', res);
        me.sock.write(msg);

    } else {

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
