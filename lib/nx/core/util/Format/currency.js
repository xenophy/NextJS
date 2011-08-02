/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.util.Format.currency

module.exports = function(v, currencySign, decimals, end) {

    var negativeSign = '',
        format = ",0",
        i = 0;
        v = v - 0;

    if(v < 0) {
        v = -v;
        negativeSign = '-';
    }

    decimals = decimals || NX.util.Format.currencyPrecision;
    format += format + (decimals > 0 ? '.' : '');

    for(; i < decimals; i++) {
        format += '0';
    }

    v = NX.util.Format.number(v, format);

    if((end || NX.util.Format.currencyAtEnd) === true) {

        return NX.String.format("{0}{1}{2}", negativeSign, v, currencySign || NX.util.Format.currencySign);

    } else {

        return NX.String.format("{0}{1}{2}", negativeSign, currencySign || NX.util.Format.currencySign, v);

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
