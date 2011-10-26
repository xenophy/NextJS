/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.smtp.Smtp.close

module.exports = function(force) {

    if(this.sock) {

        if(force) {
            this.sock.destroy();
        } else {
            this.sock.end();
        }

    }

    this.state = NX.smtp.Smtp.NOTCONNECTED;
    this.sock = null;

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
