/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.util.JSON

/**
 * @class NX.util.JSON
 */
NX.define('NX.util.JSON', {

    // {{{ singleton

    /**
     * @prop singleton
     */
    singleton: true,

    // }}}
    // {{{ encode

    /**
     * @method encode
     */
    encode : function(o) {
        return JSON.stringify(o);
    },

    // }}}
    // {{{ decode

    /**
     * @method decode
     */
    decode : function(s) {
        return JSON.parse(s);
    }

    // }}}

},function () {

    NX.encode = NX.util.JSON.encode;
    NX.decode = NX.util.JSON.decode;

});

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
