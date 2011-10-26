/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.smtp.Client.$connect

module.exports = function(stack) {

    var me = this, connect;

    connect = function(err) {

        if(!err) {

            var begin = function(err) {

                if(!err) {

                    me.$poll();

                } else {

                    stack.callback(err, stack.message);

                }

            };

            if(!me.smtp.authorized()) {

                me.smtp.login(begin);

            } else {

                me.smtp.ehlo_or_helo_if_needed(begin);

            }

        } else {

            stack.callback(err, stack.message);

        }

    };

    me.smtp.connect(connect);

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
