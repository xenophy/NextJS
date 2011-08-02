/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.util.tpl.If.isFine

module.exports = function(op, L, R) {

    var ret = true;

    switch(op) {

        // {{{ '==='

        case '===':

            if(L === R) {
            } else {
                ret = false;
            }
            break;

        // }}}
        // {{{ '!=='

        case '!==':

            if(L !== R) {
            } else {
                ret = false;
            }
            break;

        // }}}
        // {{{ '=='

        case '==':

            if(L == R) {
            } else {
                ret = false;
            }
            break;

        // }}}
        // {{{ '!='

        case '!=':

            if(L != R) {
            } else {
                ret = false;
            }
            break;

        // }}}
        // {{{ '>='

        case '>=':

            if(L >= R) {
            } else {
                ret = false;
            }
            break;

        // }}}
        // {{{ '<='

        case '<=':

            if(L <= R) {
            } else {
                ret = false;
            }
            break;

        // }}}
        // {{{ '!'

        case '!':

            if(!R) {
            } else {
                ret = false;
            }
            break;

        // {{{ '%'

        case '%':

            if(L % R) {
            } else {
                ret = false;
            }
            break;

        // }}}
        // {{{ '>'

        case '>':

            if(L > R) {
            } else {
                ret = false;
            }
            break;

        // }}}
        // {{{ '<'

        case '<':

            if(L < R) {
            } else {
                ret = false;
            }
            break;

        // }}}

    }

    return ret;

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
