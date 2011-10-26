/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.smtp.Client.send

module.exports = function(msg, callback) {

    var me = this, address;

    address = NX.smtp.Address;

    if(!(msg instanceof message.Message) && msg.from && msg.to && msg.text) {
        msg = message.create(msg);
    }

    if(msg instanceof message.Message) {

        msg.valid(function(valid, why) {

            if(valid) {

                var stack = {
                    message : msg,
                    to      : address.parse(msg.header.to),
                    from    : address.parse(msg.header.from)[0].address,
                    callback: callback || NX.emptyFn
                };

                if(msg.header.cc) {
                    stack.to = stack.to.concat(address.parse(msg.header.cc));
                }

                if(msg.header.bcc) {
                    stack.to = stack.to.concat(address.parse(msg.header.bcc));
                }

                me.queue.push(stack);
                me.$poll();

            } else {

                callback({code:-1, message:why}, msg);

            }
        });

    } else {

        callback({code:-1, message:"message is not a valid Message instance"}, msg);

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
