/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.smtp.Client.poll

module.exports = function() {

    var me = this;

    clearTimeout(me.timer);

    if(me.queue.length) {

        if(me.smtp.state == NX.smtp.Smtp.NOTCONNECTED) {

            me.connect(me.queue[0]);

        } else if(me.smtp.state == NX.smtp.Smtp.CONNECTED && !me.sending) {

            me.sendMail(me.queue.shift());

        }

    } else {

        me.timer = setTimeout(function() {
            me.smtp.quit();
        }, 1000);

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
