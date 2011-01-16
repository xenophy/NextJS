/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.util.JSON

/**
 * @class NX.util.JSON
 */
NX.util.JSON = {
    encode : function(o) {
        return JSON.stringify(o);
    },

    decode : function(s) {
        return JSON.parse(s);
    }
};

// }}}
// {{{ NX class shorthand

/**
 * @class NX
 */

// }}}
// {{{ NX.encode

/**
 * @method encode
 */
NX.encode = NX.util.JSON.encode;

// }}}
// {{{ NX.decode

/**
 * @method decode
 */
NX.decode = NX.util.JSON.decode;

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
