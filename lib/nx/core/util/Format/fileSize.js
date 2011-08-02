/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.util.Format.fileSize

module.exports = function(size) {

    if(size < 1024) {

        return size + " bytes";

    } else if (size < 1048576) {

        return (Math.round(((size*10) / 1024))/10) + " KB";

    } else {

        return (Math.round(((size*10) / 1048576))/10) + " MB";

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
