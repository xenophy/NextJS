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
var erase = function(array, index, removeCount) {
    array.splice(index, removeCount);
    return array;
};

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
    // {{{ clean

    clean: function(array) {

        var results = [],
            i = 0,
            ln = array.length,
            item;

        for (; i < ln; i++) {
            item = array[i];

            if (!NX.isEmpty(item)) {
                results.push(item);
            }
        }

        return results;
    },

    // }}}
    // {{{ clone

    clone: function(array) {
        return slice.call(array);
    },

    // }}}
    // {{{ indexOf

    indexOf: function(array, item, from) {
        return array.indexOf(item, from);
    },

    // }}}
    // {{{ lastIndexOf

    lastIndexOf: function(array, item, from) {

        var len = array.length;
        from = Number(from);
        if (isNaN(from)) {
            from = len - 1;
        } else {
            from = (from < 0) ? Math.ceil(from) : Math.floor(from);
            if (from < 0) {
                from += len;
            } else if (from >= len) {
                from = len - 1;
            }
        }

        return array.lastIndexOf(item, from);
    },

    // }}}
    // {{{ contains

    contains: function(array, item) {
        return array.indexOf(item) !== -1;
    },

    // {{{ difference

    difference: function(arrayA, arrayB) {

        var clone = slice.call(arrayA),
            ln = clone.length,
            i, j, lnB;

        for (i = 0,lnB = arrayB.length; i < lnB; i++) {
            for (j = 0; j < ln; j++) {
                if (clone[j] === arrayB[i]) {
                    erase(clone, j, 1);
                    j--;
                    ln--;
                }
            }
        }

        return clone;
    },

    // }}}
    // {{{ each

    each: function(array, fn, scope, reverse) {

        array = NXArray.from(array);

        var i, ln = array.length;

        if (reverse !== true) {
            for (i = 0; i < ln; i++) {
                if (fn.call(scope || array[i], array[i], i, array) === false) {
                    return i;
                }
            }
        } else {
            for (i = ln - 1; i > -1; i--) {
                if (fn.call(scope || array[i], array[i], i, array) === false) {
                    return i;
                }
            }
        }

        return true;
    },

    // }}}
    // {{{ every

    every: function(array, fn, scope) {
        return array.every(fn, scope);
    },

    // }}}
    // {{{ slice

    slice: function(array, begin, end) {
        return slice.call(array, begin, end);
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
