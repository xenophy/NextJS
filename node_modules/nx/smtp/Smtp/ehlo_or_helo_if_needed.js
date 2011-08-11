/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.smtp.Smtp.ehlo_or_helo_if_needed

module.exports = function(fn, domain) {

    var me = this;

    if(!me.features) {

        var res = function(err, data) {
            fn(err, data);
        };

        var attempt = function(err, data) {

            if(err) {

                me.helo(res, domain);

            } else {

                fn(err);

            }
        };

        me.ehlo(attempt, domain);
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
