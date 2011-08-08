/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.smtp.Client.send

module.exports = function(msg, fn) {

    fn = fn || NX.emptyFn;
    msg = msg || {};

    if(!(msg instanceof NX.smtp.Message) && msg.from && msg.to && msg.body) {
        msg = NX.smtp.Message.create(msg);
    }

    if(msg instanceof NX.smtp.Message && msg.isValid()) {




    } else {
        console.log("error");
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
