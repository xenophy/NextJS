/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.smtp.Client.sendRcpt

module.exports = function(stack) {

    var me = this,
        to = stack.to.shift().address;

    me.smtp.rcpt('<'+ to +'>', me.sendSmtp(stack, stack.to.length ? me.sendScpt : me.sendData));

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
