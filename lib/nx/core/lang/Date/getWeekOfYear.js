/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.Date.getWeekOfYear

module.exports = (function() {

    var ms1d = 864e5,
        ms7d = 7 * ms1d;

    return function(date) {

        var DC3 = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate() + 3) / ms1d,
            AWN = Math.floor(DC3 / 7), // an Absolute Week Number
            Wyr = new Date(AWN * ms7d).getUTCFullYear();

        return AWN - Math.floor(Date.UTC(Wyr, 0, 7) / ms7d) + 1;
    };
})();

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
