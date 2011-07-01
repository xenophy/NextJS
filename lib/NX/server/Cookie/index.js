/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.server.Cookie

NX.define('NX.server.Cookie', {

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
    // {{{ alternateClassName

    alternateClassName: 'NX.Cookie',

    // }}}
    // {{{ statics

    statics: {

        // {{{ parse

        parse: function(str) {

            var obj = {}, pairs = str.split(/[;,] */);

            for(var i = 0, len = pairs.length; i < len; ++i) {

                var pair = pairs[i],
                    eqlIndex = pair.indexOf('='),
                    key = pair.substr(0, eqlIndex).trim().toLowerCase(),
                    val = pair.substr(++eqlIndex, pair.length).trim();

                    if(val[0] === '"') {
                        val = val.slice(1, -1);
                    }

                    if(obj[key] === undefined) {
                        obj[key] = decodeURIComponent(val.replace(/\+/g, ' '));
                    }
            }

            return obj;
        },

        // }}}
        // {{{ serializer

        serializer: function(name, val, obj) {

            var pairs = [name + '=' + encodeURIComponent(val)],
                obj = obj || {};

            if(obj.domain) {
                pairs.push('domain=' + obj.domain);
            }

            if(obj.path) {
                pairs.push('path=' + obj.path);
            }

            if(obj.expires) {
                pairs.push('expires=' + obj.expires.toUTCString());
            }

            if(obj.httpOnly) {
                pairs.push('httpOnly');
            }

            if(obj.secure) {
                pairs.push('secure');
            }

            return pairs.join('; ');

        },

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
