/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.smtp.Client.$sendrcpt

module.exports = function(stack) {

    var me = this,
        to = stack.to.shift().address;

    me.smtp.rcpt(me.$sendsmtp(stack, stack.to.length ? me.$sendrcpt : me.$senddata), '<'+ to +'>');

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
