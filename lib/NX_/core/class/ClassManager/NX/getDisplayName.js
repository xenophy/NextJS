/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.getDisplayName

module.exports = function(object) {

    if(object.displayName) {

        return object.displayName;

    }

    if(object.$name && object.$class) {

        return NX.getClassName(object.$class) + '#' + object.$name;

    }

    if(object.$className) {

        return object.$className;

    }

    return 'Anonymous';

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
