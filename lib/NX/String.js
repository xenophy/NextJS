/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ require

T_NX = require('./core');

// }}}
// {{{ NX.String

/**
 * @class NX.String
 */
var T_String = module.exports = {

    // {{{ trimRegex

    /**
     * @prop trimRegex
     */
    trimRegex: /^[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2028\u2029\u202f\u205f\u3000]+|[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2028\u2029\u202f\u205f\u3000]+$/g,

    // }}}
    // {{{ escapeRe

    /**
     * @prop escapeRe
     */
    escapeRe: /('|\\)/g,

    // }}}
    // {{{ escapeRegexRe

    /**
     * @prop escapeRegexRe
     */
    escapeRegexRe: /([-.*+?^${}()|[\]\/\\])/g,

    // }}}
    // {{{ number_format

    /**
     * @method number_format
     */
    number_format: function(v) {
        return v.toString().replace(/([0-9]+?)(?=(?:[0-9]{3})+$)/g, '$1,');
    },

    // }}}
    // {{{ replace

    /**
     * @method replace
     */
    replace : function(v, findme, repl) {
        return v.replace(new RegExp(T_String.escapeRe(findme), 'g'), repl);
    },

    // }}}
    // {{{ parseQueryString

    /**
     * @method parseQueryString
     */
    parseQueryString : function() {
    
    
    },

    // }}}
    // {{{ htmlEncode

    /**
     * @method htmlEncode
     */
    htmlEncode : function() {
    
    
    },

    // }}}
    // {{{ htmlDecode

    /**
     * @method htmlDecode
     */
    htmlDecode : function() {
    
    },

    // }}}
    // {{{ urlAppend

    /**
     * @method urlAppend
     */
    urlAppend : function() {
    
    },

    // }}}
    // {{{ trim

    /**
     * @method trim
     */
    trim: function(v) {
        return String(v).replace(T_String.trimRe, '');
    },

    // }}}
    // {{{ capitalize

    /**
     * @method capitalize
     */
    capitalize : function(v) {
        return !v ? v : v.charAt(0).toUpperCase() + v.substr(1).toLowerCase();
    },

    // }}}
    // {{{ ellipsis

    /**
     * @method ellipsis
     */
    ellipsis : function() {
    
    },

    // }}}
    // {{{ 

    /**
     * @method htmlDecode
     */
    htmlDecode : function() {
    
    },

    // }}}
    // {{{ escape

    /**
     * @method escape
     */
    escape: function(s) {
        return s.replace(T_String.escapeRe, "\\$1");
    },

    // }}}
    // {{{ escapeRegex

    /**
     * @method escapeRegex
     */
    escapeRegex: function(s) {
        return s.replace(T_String.escapeRegexRe, "\\$1");
    },

    // }}}
    // {{{ toggle

    /**
     * @method toggle
     */
    toggle: function(s, v, o) {

    },

    // }}}
    // {{{ leftPad

    /**
     * @method leftPad
     */
    leftPad: function(s, size, char) {

    },

    // }}}
    // {{{ format

    /**
     * @method format
     */
    format: function() {

        var regex = /%%|%(\d+\$)?([-+\'#0 ]*)(\*\d+\$|\*|\d+)?(\.(\*\d+\$|\*|\d+))?([scboxXuidfegEG])/g;
        var a = arguments,
            i = 0,
            format = a[i++];

        // pad()
        var pad = function(str, len, chr, leftJustify) {

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
            } else {
                minWidth = +minWidth;
            }

            if(!precision) {
                precision = 'fFeE'.indexOf(type) > -1 ? 6 : (type == 'd') ? 0 : undefined;
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
            }
        };

        return format.replace(regex, doFormat);
    }

    // }}}

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
