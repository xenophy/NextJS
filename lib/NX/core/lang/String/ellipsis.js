/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.Object.ellipsis

module.exports = function(value, len, word) {

    if (value && value.length > len) {
        if (word) {
            var vs = value.substr(0, len - 2),
            index = Math.max(vs.lastIndexOf(' '), vs.lastIndexOf('.'), vs.lastIndexOf('!'), vs.lastIndexOf('?'));
            if (index !== -1 && index >= (len - 15)) {
                return vs.substr(0, index) + "...";
            }
        }
        return value.substr(0, len - 3) + "...";
    }
    return value;
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
