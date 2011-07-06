/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.server.MultipartForm.resume

module.exports = function(req) {

    var me = this;

    try {

        req.resume();

    } catch(e) {

        if(!me.finish) {

            me.error(e);

        }

        return false;
    }

    return true;

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
