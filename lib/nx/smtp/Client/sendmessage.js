/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.smtp.Client.sendmessage

module.exports = function(stack) {

    var me = this,
        stream = stack.message.stream();

    stream.on('data', function(data) { me.smtp.message(data); });
    stream.on('end', function() { me.smtp.data_end(me.sendsmtp(stack, me.senddone)); });
    stream.on('error', me.sendsmtp(stack));

    var me = this;

    me.smtp.data(me.sendsmtp(stack, me.sendmessage));

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
