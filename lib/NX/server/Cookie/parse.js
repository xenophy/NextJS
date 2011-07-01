/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.server.Cookie.parse

module.exports = function(str) {

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
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
