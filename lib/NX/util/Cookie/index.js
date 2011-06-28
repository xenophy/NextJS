/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.util.Cookie

NX.define('NX.util.Cookie', {

    // {{{ config

    config: {
        path: '/',
        httpOnly: true,
        expires: undefined,
        data: undefined,
        secure: undefined,
        domain: undefined,
        maxAge: 14400000,
        originalMaxAge: 14400000,
    },

    // }}}
    // {{{ setExpires

    setExpires: require('./setExpires'),

    // }}}
    // {{{ setMaxAge

    setMaxAge: require('./setMaxAge'),

    // }}}
    // {{{ getMaxAge

    getMaxAge: require('./getMaxAge'),

    // }}}
    // {{{ getData

    getData: require('./getData'),

    // }}}
    // {{{ constructor

    constructor: require('./constructor'),

    // }}}
    // {{{ serialize

    serialize: require('./serialize'),

    // }}}
    // {{{ toJSON

    toJSON: require('./toJSON')

    // }}}

});

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
