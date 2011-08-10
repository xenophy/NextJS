/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.smtp.Client.sendsmtp

module.exports = function(stack, next) {

    var me = this;

    var check = function(err) {

        if(!err && next) {

            next.apply(me, [stack]);

        } else {

            me.smtp.rset(function() {
                me.senddone(stack, err);
            });

        }

    };

    return check;

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
