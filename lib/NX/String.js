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
    // {{{ formatRe

    /**
     * @prop formatRe
     */
    formatRe: /\{(\d+)\}/g,

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
    // {{{ escapeRegexRe

    /**
     * @method escapeRegexRe
     */
    escapeRegex: function(s) {
        return s.replace(T_String.escapeRegexRe, "\\$1");
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
    // {{{ replace

    /**
     * @method replace
     */
    replace : function(v, findme, repl) {
        return v.replace(new RegExp(T_String.escapeRe(findme), 'g'), repl);
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
