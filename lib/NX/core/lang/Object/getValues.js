/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.Object.getValues

var $METHOD = module.exports = function(o) {

    var values = [], prop;

    for(prop in o) {
        if(o.hasOwnProperty(prop)) {
            values.push(o[prop]);
        }
    }

    return values;
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
