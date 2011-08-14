/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.smtp.Client.sendMessage

module.exports = function(stack) {

    var me = this,
        stream = NX.create('NX.smtp.stream.Message', {message: stack.message});

    stream.on('data', function(data) {
        me.smtp.message(data);
    });

    stream.on('end', function() {
        me.smtp.end(me.sendSmtp(stack, me.sendDone));
    });

    stream.on('error', me.sendSmtp(stack));

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
