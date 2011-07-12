/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.Date.isValid

module.exports = function(y, m, d, h, i, s, ms) {

    h = h || 0;
    i = i || 0;
    s = s || 0;
    ms = ms || 0;

    var dt = NX.Date.add(new Date(y < 100 ? 100 : y, m - 1, d, h, i, s, ms), NX.Date.YEAR, y < 100 ? y - 100 : 0);

    return y == dt.getFullYear() &&
           m == dt.getMonth() + 1 &&
           d == dt.getDate() &&
           h == dt.getHours() &&
           i == dt.getMinutes() &&
           s == dt.getSeconds() &&
           ms == dt.getMilliseconds();
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
