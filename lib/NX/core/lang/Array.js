/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

(function() {

var replace = function(array, index, removeCount, insert) {

    if (insert && insert.length) {
        if (index < array.length) {
            array.splice.apply(array, [index, removeCount].concat(insert));
        } else {
            array.push.apply(array, insert);
        }
    } else {
        array.splice(index, removeCount);
    }

    return array;
};

var slice = Array.prototype.slice;

// {{{ NX.Array

/**
 * @class NX.Array
 */
var NXArray = NX.Array = {

    // {{{ insert

    insert: function (array, index, items) {
        return replace(array, index, 0, items);
    },

    // }}}
    // {{{ replace

    replace: replace,

    // }}}
    // {{{ toArray

    toArray: function(iterable, start, end) {

        if (!iterable || !iterable.length) {
            return [];
        }

        if (typeof iterable === 'string') {
            iterable = iterable.split('');
        }

        var array = [], i;

        start = start || 0;
        end = end ? ((end < 0) ? iterable.length + end : end) : iterable.length;

        for (i = start; i < end; i++) {
            array.push(iterable[i]);
        }

        return array;
    },

    // }}}
    // {{{ from

    from: function(value, newReference) {

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
    },

    // }}}

};

// }}}

NX.toArray = function() {
    return NXArray.toArray.apply(NXArray, arguments);
};

})();

/*
* Local variables:
* tab-width: 4
* c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
