/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.Array.lastIndexOf

module.exports = function(array, item, from) {

    var len = array.length;
    from = Number(from);
    if (isNaN(from)) {
        from = len - 1;
    } else {
        from = (from < 0) ? Math.ceil(from) : Math.floor(from);
        if (from < 0) {
            from += len;
        } else if (from >= len) {
            from = len - 1;
        }
    }

    return array.lastIndexOf(item, from);
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
