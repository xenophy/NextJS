/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.Array.from

module.exports = function(value, newReference) {

    var slice = Array.prototype.slice;

    if (value === undefined || value === null) {
        return [];
    }

    if (NX.isArray(value)) {
        return (newReference) ? slice.call(value) : value;
    }

    if (value && value.length !== undefined && typeof value !== 'string') {
        return NX.toArray(value);
    }

    return [value];
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
