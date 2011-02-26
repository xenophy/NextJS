/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var qs = require('querystring');

// }}}
// {{{ NX.Object.toQueryString

var $METHOD = module.exports = function(o, pre) {

    var ret = qs.stringify(o);
    if(pre) {
        ret = pre + ret;
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
