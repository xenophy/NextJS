/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.Date.getDayOfYear

module.exports = function(date) {

    var num = 0,
        d = NX.Date.clone(date),
        m = date.getMonth(),
        i;

    for(i = 0, d.setDate(1), d.setMonth(0); i < m; d.setMonth(++i)) {
        num += NX.Date.getDaysInMonth(d);
    }

    return num + date.getDate() - 1;
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
