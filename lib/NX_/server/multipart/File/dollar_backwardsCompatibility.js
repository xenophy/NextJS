/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.server.multipart.Form.$backwardsCompatibility

module.exports = function() {

    var me = this;

    me.__defineGetter__('length', function() {
        return me.size;
    });

    me.__defineGetter__('filename', function() {
        return me.name;
    });

    me.__defineGetter__('mime', function() {
        return me.type;
    });

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
