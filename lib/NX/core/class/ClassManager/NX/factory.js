/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.factory

module.exports = function(item, namespace) {

    if (item instanceof Array) {
        var i, ln;

        for (i = 0, ln = item.length; i < ln; i++) {
            item[i] = NX.factory(item[i], namespace);
        }

        return item;
    }

    var isString = (typeof item === 'string');

    if (isString || (item instanceof Object && item.constructor === Object)) {

        var name, config = {};

        if (isString) {
            name = item;
        } else {
            name = item.className;
            config = item;
            delete config.className;
        }

        if (namespace !== undefined && name.indexOf(namespace) === -1) {
            name = namespace + '.' + NX.String.capitalize(name);
        }

        return NX.create(name, config);
    }

    if (typeof item === 'function') {
        return NX.create(item);
    }

    return item;
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
