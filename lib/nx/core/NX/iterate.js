/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.iterate

module.exports = function(object, fn, scope) {

    if(NX.isEmpty(object)) {
        return;
    }

    if(scope === undefined) {
        scope = object;
    }

    if(NX.isIterable(object)) {

        NX.Array.each.call(NX.Array, object, fn, scope);

    } else {

        NX.Object.each.call(NX.Object, object, fn, scope);

    }
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
