/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.util.String

/**
 * @class NX.util.String
 */
NX.util.String = {

    // {{{ explode

    /**
     * @method explode
     */
    explode: function(delimiter, string, limit) {

        var args = arguments,
        len = args.length;

        if(len < 2 || !NX.isDefined(args[0]) || !NX.isDefined(args[1])) {
            return null;
        }

        if(delimiter === '' || delimiter === false || delimiter === null) {
            return false;
        }

        if(
            NX.isFunction(delimiter) ||
            NX.isObject(delimiter) ||
            NX.isFunction(string) ||
            NX.isObject(string)
        ) {
            return [];
        }

        if(delimiter === true) {
            delimiter = '1';
        }

        if(!limit) {
            return string.toString().split(delimiter.toString());
        } else {
            var splitted = string.toString().split(delimiter.toString());
            var partA = splitted.splice(0, limit - 1);
            var partB = splitted.join(delimiter.toString());
            partA.push(partB);
            return partA;
        }
    },

    // }}}
    // {{{ implode

    /**
     * @method implode
     */
    implode : function(glue, pieces) {

        var i = '',
            retVal='',
            tGlue='',
            args = arguments,
            len = args.length;

        if(len === 1) {
            pieces = glue;
            glue = '';
        }

        if(NX.isArray(pieces)) {

            return pieces.join(glue);

        } else if(NX.isObject(pieces)) {

            NX.iterate(pieces, function(i, v) {
                retVal += tGlue + v;
                tGlue = glue;
            });

            return retVal;

        } else {

            return pieces;

        }

    },

    // }}}
    // {{{ sprintf

    /**
     * @method sprintf
     */
    sprintf : function() {

        var regex = /%%|%(\d+\$)?([-+\'#0 ]*)(\*\d+\$|\*|\d+)?(\.(\*\d+\$|\*|\d+))?([scboxXuidfegEG])/g;
        var a = arguments,
            i = 0,
            format = a[i++];

        // pad()
        var pad = function(str, len, chr, leftJustify) {

            if(!chr) {
                chr = ' ';
            }

            var padding = (str.length >= len) ? '' : Array(1 + len - str.length >>> 0).join(chr);

            return leftJustify ? str + padding : padding + str;
        };

        // justify()
        var justify = function(value, prefix, leftJustify, minWidth, zeroPad, customPadChar) {

            var diff = minWidth - value.length;

            if(diff > 0) {
                if(leftJustify || !zeroPad) {
                    value = pad(value, minWidth, customPadChar, leftJustify);
                } else {
                    value = value.slice(0, prefix.length) + pad('', diff, '0', true) + value.slice(prefix.length);
                }
            }
            return value;
        };

        // formatBaseX()
        var formatBaseX = function(value, base, prefix, leftJustify, minWidth, precision, zeroPad) {
            var number = value >>> 0;
            prefix = prefix && number && {'2': '0b', '8': '0', '16': '0x'}[base] || '';
            value = prefix + pad(number.toString(base), precision || 0, '0', false);
            return justify(value, prefix, leftJustify, minWidth, zeroPad);
        };

        // formatString()
        var formatString = function(value, leftJustify, minWidth, precision, zeroPad, customPadChar) {

            if(precision != null) {
                value = value.slice(0, precision);
            }

            return justify(value, '', leftJustify, minWidth, zeroPad, customPadChar);
        };

        // doFormat()
        var doFormat = function(substring, valueIndex, flags, minWidth, _, precision, type) {

            var number;
            var prefix;
            var method;
            var textTransform;
            var value;

            if(substring == '%%') {
                return '%';
            }

            var leftJustify = false, positivePrefix = '', zeroPad = false, prefixBaseX = false, customPadChar = ' ';
            var flagsl = flags.length;

            for(var j = 0; flags && j < flagsl; j++) {
                switch(flags.charAt(j)) {
                    case ' ': positivePrefix = ' '; break;
                    case '+': positivePrefix = '+'; break;
                    case '-': leftJustify = true; break;
                    case "'": customPadChar = flags.charAt(j+1); break;
                    case '0': zeroPad = true; break;
                    case '#': prefixBaseX = true; break;
                }
            }

            if(!minWidth) {

                minWidth = 0;

            } else if(minWidth == '*') {

                minWidth = +a[i++];

            } else if(minWidth.charAt(0) == '*') {

                minWidth = +a[minWidth.slice(1, -1)];

            } else {

                minWidth = +minWidth;

            }

            if(minWidth < 0) {
                minWidth = -minWidth;
                leftJustify = true;
            }

            if(!isFinite(minWidth)) {
                throw new Error('sprintf: (minimum-)width must be finite');
            }

            if(!precision) {

                precision = 'fFeE'.indexOf(type) > -1 ? 6 : (type == 'd') ? 0 : undefined;

            } else if(precision == '*') {

                precision = +a[i++];

            } else if(precision.charAt(0) == '*') {

                precision = +a[precision.slice(1, -1)];

            } else {

                precision = +precision;

            }

            value = valueIndex ? a[valueIndex.slice(0, -1)] : a[i++];

            switch(type) {
                case 's':
                    return formatString(String(value), leftJustify, minWidth, precision, zeroPad, customPadChar);
                case 'c':
                    return formatString(String.fromCharCode(+value), leftJustify, minWidth, precision, zeroPad);
                case 'b':
                    return formatBaseX(value, 2, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
                case 'o':
                    return formatBaseX(value, 8, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
                case 'x':
                    return formatBaseX(value, 16, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
                case 'X':
                    return formatBaseX(value, 16, prefixBaseX, leftJustify, minWidth, precision, zeroPad).toUpperCase();
                case 'u':
                    return formatBaseX(value, 10, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
                case 'i':
                case 'd':
                    number = parseInt(+value, 10);
                    prefix = number < 0 ? '-' : positivePrefix;
                    value = prefix + pad(String(Math.abs(number)), precision, '0', false);

                    return justify(value, prefix, leftJustify, minWidth, zeroPad);
                case 'e':
                case 'E':
                case 'f':
                case 'F':
                case 'g':
                case 'G':
                    number = +value;
                    prefix = number < 0 ? '-' : positivePrefix;
                    method = ['toExponential', 'toFixed', 'toPrecision']['efg'.indexOf(type.toLowerCase())];
                    textTransform = ['toString', 'toUpperCase']['eEfFgG'.indexOf(type) % 2];
                    value = prefix + Math.abs(number)[method](precision);

                    return justify(value, prefix, leftJustify, minWidth, zeroPad)[textTransform]();
                default:
                    return substring;
            }
        };

        return format.replace(regex, doFormat);
    }

    // }}}

};

// }}}
// {{{ shorthand

NX.str = NX.util.String;

// }}}
// {{{ NX class shorthand

/**
 * @class NX
 */

// }}}
// {{{ explode

/**
 * @method explode
 */
NX.explode = NX.util.String.explode;

// }}}
// {{{ implode

/**
 * @method implode
 */
NX.implode = NX.util.String.implode;

// }}}
// {{{ sprintf

/**
 * @method sprintf
 */
NX.sprintf = NX.util.String.sprintf;

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
