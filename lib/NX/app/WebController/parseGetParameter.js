/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.app.WebController.parseGetParameter

module.exports = function(url) {

    var p = NX.Url.parse(url, true);

    var get = {};

    if(p.search) {
        get = require('querystring').parse(p.search.substr(1));
    };

    return {
        get: NX.clone(get),
        request: NX.clone(p.query)
    };

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
