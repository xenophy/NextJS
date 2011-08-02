/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.Date.formatCodes

module.exports = {
    d: "NX.String.leftPad(this.getDate(), 2, '0')",
    D: "NX.Date.getShortDayName(this.getDay())",
    j: "this.getDate()",
    l: "NX.Date.dayNames[this.getDay()]",
    N: "(this.getDay() ? this.getDay() : 7)",
    S: "NX.Date.getSuffix(this)",
    w: "this.getDay()",
    z: "NX.Date.getDayOfYear(this)",
    W: "NX.String.leftPad(NX.Date.getWeekOfYear(this), 2, '0')",
    F: "NX.Date.monthNames[this.getMonth()]",
    m: "NX.String.leftPad(this.getMonth() + 1, 2, '0')",
    M: "NX.Date.getShortMonthName(this.getMonth())",
    n: "(this.getMonth() + 1)",
    t: "NX.Date.getDaysInMonth(this)",
    L: "(NX.Date.isLeapYear(this) ? 1 : 0)",
    o: "(this.getFullYear() + (NX.Date.getWeekOfYear(this) == 1 && this.getMonth() > 0 ? +1 : (NX.Date.getWeekOfYear(this) >= 52 && this.getMonth() < 11 ? -1 : 0)))",
    Y: "NX.String.leftPad(this.getFullYear(), 4, '0')",
    y: "('' + this.getFullYear()).substring(2, 4)",
    a: "(this.getHours() < 12 ? 'am' : 'pm')",
    A: "(this.getHours() < 12 ? 'AM' : 'PM')",
    g: "((this.getHours() % 12) ? this.getHours() % 12 : 12)",
    G: "this.getHours()",
    h: "NX.String.leftPad((this.getHours() % 12) ? this.getHours() % 12 : 12, 2, '0')",
    H: "NX.String.leftPad(this.getHours(), 2, '0')",
    i: "NX.String.leftPad(this.getMinutes(), 2, '0')",
    s: "NX.String.leftPad(this.getSeconds(), 2, '0')",
    u: "NX.String.leftPad(this.getMilliseconds(), 3, '0')",
    O: "NX.Date.getGMTOffset(this)",
    P: "NX.Date.getGMTOffset(this, true)",
    T: "NX.Date.getTimezone(this)",
    Z: "(this.getTimezoneOffset() * -60)",

    c: function() {
        for(var c = "Y-m-dTH:i:sP", code = [], i = 0, l = c.length; i < l; ++i) {
            var e = c.charAt(i);
                code.push(e == "T" ? "'T'" : NX.Date.getFormatCode(e));
        }
        return code.join(" + ");
    },

    U: "Math.round(this.getTime() / 1000)"
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
