/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.Date.add

module.exports = function(date, interval, value) {

    var d = NX.Date.clone(date),
        Date = NX.Date;

    if(!interval || value === 0) {
        return d;
    }

    switch(interval.toLowerCase()) {

        case NX.Date.MILLI:
            d.setMilliseconds(d.getMilliseconds() + value);
            break;

        case NX.Date.SECOND:
            d.setSeconds(d.getSeconds() + value);
            break;

        case NX.Date.MINUTE:
            d.setMinutes(d.getMinutes() + value);
            break;

        case NX.Date.HOUR:
            d.setHours(d.getHours() + value);
            break;

        case NX.Date.DAY:
            d.setDate(d.getDate() + value);
            break;

        case NX.Date.MONTH:
            var day = date.getDate();

            if(day > 28) {
                day = Math.min(day, NX.Date.getLastDateOfMonth(NX.Date.add(NX.Date.getFirstDateOfMonth(date), 'mo', value)).getDate());
            }
            d.setDate(day);
            d.setMonth(date.getMonth() + value);
            break;

        case NX.Date.YEAR:
            d.setFullYear(date.getFullYear() + value);
            break;
    }

    return d;
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
