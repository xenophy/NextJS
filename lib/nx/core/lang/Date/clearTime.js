/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.Date.clearTime

module.exports = function(date, clone) {

    if(clone) {
        return NX.Date.clearTime(NX.Date.clone(date));
    }

    var d = date.getDate();

    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);

//#JSCOVERAGE_IF 1
/*
    if(date.getDate() != d) {

        for (var hr = 1, c = NX.Date.add(date, NX.Date.HOUR, hr); c.getDate() != d; hr++, c = NX.Date.add(date, NX.Date.HOUR, hr));

        date.setDate(d);
        date.setHours(c.getHours());

    }
    */
//#JSCOVERAGE_ENDIF

    return date;
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
