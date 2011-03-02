/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.util.HashMap.removeByKey

var $METHOD = module.exports = function(key) {

    var me = this, value;

    if(me.containsKey(key)) {
        value = me.map[key];
        delete me.map[key];
        --me.length;
        return true;
    }

    return false;
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
