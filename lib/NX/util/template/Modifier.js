/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ namespace

NX.ns('NX.util', 'NX.util.template');

// }}}
// {{{ NX.util.template.Modifier

/**
 * @class NX.util.template.Modifier
 */
NX.util.template.modifier = {

    number : function(v, format) {

        if (!format) {
            return v;
        }

        if (isNaN(v)) {
            return '';
        }
        var comma = ',',
        dec   = '.',
        i18n  = false,
        neg   = v < 0;

        v = Math.abs(v);
        if (format.substr(format.length - 2) == '/i') {
            format = format.substr(0, format.length - 2);
            i18n   = true;
            comma  = '.';
            dec    = ',';
        }

        var hasComma = format.indexOf(comma) != -1,
        psplit   = (i18n ? format.replace(/[^\d\,]/g, '') : format.replace(/[^\d\.]/g, '')).split(dec);

        if (1 < psplit.length) {
            v = v.toFixed(psplit[1].length);
        } else if(2 < psplit.length) {
            throw ('NumberFormatException: invalid format, formats should have no more than 1 period: ' + format);
        } else {
            v = v.toFixed(0);
        }

        var fnum = v.toString();

        psplit = fnum.split('.');

        if (hasComma) {
            var cnum = psplit[0], 
            parr = [], 
            j    = cnum.length, 
            m    = Math.floor(j / 3),
            n    = cnum.length % 3 || 3,
            i;

            for (i = 0; i < j; i += n) {
                if (i != 0) {
                    n = 3;
                }

                parr[parr.length] = cnum.substr(i, n);
                m -= 1;
            }
            fnum = parr.join(comma);
            if (psplit[1]) {
                fnum += dec + psplit[1];
            }
        } else {
            if (psplit[1]) {
                fnum = psplit[0] + dec + psplit[1];
            }
        }

        return (neg ? '-' : '') + format.replace(/[\d,?\.?]+/, fnum);
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
