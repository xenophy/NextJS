/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

var I18NFormatCleanRe;
var formatCleanRe = /[^\d\.]/g;

// {{{ NX.util.Format.number

module.exports = function(v, formatString) {

    if(!formatString) {
        return v;
    }

    v = NX.Number.from(v, NaN);

    if(isNaN(v)) {
        return '';
    }

    var comma = NX.util.Format.thousandSeparator,
        dec   = UtilFormat.decimalSeparator,
        i18n  = false,
        neg   = v < 0,
        hasComma,
        psplit;

    v = Math.abs(v);

    if(formatString.substr(formatString.length - 2) == '/i') {

        if(!I18NFormatCleanRe) {

            I18NFormatCleanRe = new RegExp('[^\\d\\' + UtilFormat.decimalSeparator + ']','g');

        }

        formatString = formatString.substr(0, formatString.length - 2);
        i18n   = true;
        hasComma = formatString.indexOf(comma) != -1;
        psplit = formatString.replace(I18NFormatCleanRe, '').split(dec);

    } else {
        hasComma = formatString.indexOf(',') != -1;
        psplit = formatString.replace(formatCleanRe, '').split('.');
    }

    if(1 < psplit.length) {

        v = v.toFixed(psplit[1].length);

    } else if(2 < psplit.length) {

        NX.Error.raise({
            sourceClass: "NX.util.Format",
            sourceMethod: "number",
            value: v,
            formatString: formatString,
            msg: "Invalid number format, should have no more than 1 decimal"
        });

    } else {

        v = v.toFixed(0);

    }

    var fnum = v.toString();

    psplit = fnum.split('.');

    if(hasComma) {

        var cnum = psplit[0],
            parr = [],
            j    = cnum.length,
            m    = Math.floor(j / 3),
            n    = cnum.length % 3 || 3,
            i;

        for(i = 0; i < j; i += n) {

            if(i !== 0) {
                n = 3;
            }

            parr[parr.length] = cnum.substr(i, n);
            m -= 1;
        }

        fnum = parr.join(comma);

        if(psplit[1]) {
            fnum += dec + psplit[1];
        }

    } else {

        if(psplit[1]) {
            fnum = psplit[0] + dec + psplit[1];
        }

    }

    if(neg) {
        neg = fnum.replace(/[^1-9]/g, '') !== '';
    }

    return (neg ? '-' : '') + formatString.replace(/[\d,?\.?]+/, fnum);
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
