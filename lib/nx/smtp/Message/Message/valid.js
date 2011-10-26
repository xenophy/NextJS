/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.smtp.message.Message.valid

module.exports = function(callback) {

    var me = this;

    if(!me.header.from) {

        callback(false, "message does not have a valid sender");

    }

    if(!me.header.to) {

        callback(false, "message does not have a valid recipient");

    } else if(me.attachments.length === 0) {

        callback(true);

    } else {

        var failed = [];

        me.attachments.forEach(function(attachment, index) {

            path.exists(attachment.path, function(exists) {

                if(!exists) {
                    failed.push(attachment.path + " does not exist");
                }

                if(index + 1 == me.attachments.length) {
                    callback(failed.length === 0, failed.join(", "));
                }
            });
        });

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
