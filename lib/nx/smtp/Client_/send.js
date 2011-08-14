/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.smtp.Client.send

module.exports = function(msg, fn) {

    var me = this;

    fn = fn || NX.emptyFn;
    msg = msg || {};

    if(!(msg instanceof NX.smtp.Message) && msg.from && msg.to && msg.text) {
        msg = NX.smtp.Message.create(msg);
    }

    if(msg instanceof NX.smtp.Message && msg.isValid()) {

        var parse = NX.smtp.Address.parse;

        var stack = {
            message : msg,
            to      : parse(msg.header["to"]),
            from    : parse(msg.header["from"])[0].address,
            callback: fn
        };

        if(msg.header["cc"]) {
            stack.to = stack.to.concat(parse(msg.header["cc"]));
        }

        if(msg.header["bcc"]) {
            stack.to = stack.to.concat(parse(msg.header["bcc"]));
        }

        me.queue.push(stack);

        me.poll();

    } else {

        NX.log(NX.$e('message is not a valid Message instance'));

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
