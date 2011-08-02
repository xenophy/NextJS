/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.server.multipart.Form.$uploadPath

module.exports = function(filename) {

    var me = this,
        name = '';

    for(var i = 0; i < 32; i++) {
        name += Math.floor(Math.random() * 16).toString(16);
    }

    if(me.keepExtensions) {
        name += NX.Path.extname(filename);
    }

    return NX.Path.join(me.uploadDir, name);

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
