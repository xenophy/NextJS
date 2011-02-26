/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var T_NX = require('./core');

// }}}
// {{{ private

arrayPrototype = Array.prototype;

// }}}
// {{{ NX.Array

/**
 * @class NX.Array
 */
var T_Array = module.exports = {

    // {{{ each

    /**
     * @method each
     */
    each: function(array, fn, scope) {

        if(T_NX.isEmpty(array, true)) {
            return 0;
        }

        if(!T_NX.isIterable(array) || T_NX.isPrimitive(array)) {
            array = [array];
        }

        for(var i = 0, len = array.length; i < len; i++) {
            if(fn.call(scope || array[i], array[i], i, array) === false) {
                return i;
            }
        }

        return true;
    },

    // }}}
    // {{{ forEach

    /**
     * @method forEach
     */
    forEach: function(array, fn, scope) {
        return array.forEach(fn, scope);
    },

    // }}}
    // {{{ indexOf

    /**
     * @method indexOf
     */
    indexOf: function(array, item, from) {
        return array.indexOf(item, from);
    },

    // }}}
    // {{{ contains

    /**
     * @method contains
     */
    contains: function(array, item) {
        return (T_Array.indexOf(array, item) !== -1);
    },

    // }}}
    // {{{ toArray

    /**
     * @method toArray
     */
    toArray: function(array, start, end) {
        return arrayPrototype.slice.call(array, start || 0, end || array.length);
    },

    // }}}
    // {{{ pluck

    /**
     * @method pluck
     */
    pluck: function(arr, prop) {

        var ret = [];
        T_NX.each(arr, function(v) {
            ret.push(v[prop]);
        });

        return ret;
    },

    // }}}
    // {{{ map

    /**
     * @method map
     */
    map: function(array, fn, scope) {
        if (!fn) {
            throw new Error("[NX.Array.map] fn must be a valid callback function");
        }

        return array.map(fn, scope);
    },

    // }}}
    // {{{ every

    /**
     * @method every
     */
    every: function(array, fn, scope) {
        return array.every(fn, scope);
    },

    // }}}
    // {{{ some

    /**
     * @method some
     */
    some: function(array, fn, scope) {
        return array.some(fn, scope);
    },

    // }}}
    // {{{ clean

    /**
     * @method clean
     */
    clean: function(array) {

        var results = [],
            i, ln, item;

        for(i = 0, ln = array.length; i < ln; i++) {
            item = array[i];

            if (!T_NX.isEmpty(item)) {
                results.push(item);
            }
        }

        return results;
    },

    // }}}
    // {{{ unique

    /**
     * @method unique
     */
    unique: function(array) {

        var clone = [],
        me = T_Array;

        me.forEach(array, function(item) {
            if (!me.contains(clone, item)) {
                clone.push(item);
            }
        });

        return clone;
    },

    // }}}
    // {{{ filter

    /**
     * @method filter
     */
    filter: function(array, fn, scope) {

        if(!fn) {
            throw new Error("[NX.Array.filter] fn must be a valid callback function");
        }

        return array.filter(fn, scope);
    },

    // }}}
    // {{{ from

    /**
     * @method from
     */
    from: function(value) {

        if(T_NX.isIterable(value)) {
            return T_Array.toArray(value);
        }

        if(T_NX.isDefined(value) && value !== null) {
            return [value];
        }

        return [];
    },

    // }}}
    // {{{ remove

    /**
     * @method remove
     */
    remove: function(array, item) {

        var index = T_Array.indexOf(array, item);

        if (index !== -1) {
            array.splice(index, 1);
        }

        return array;
    },

    // }}}
    // {{{ include

    /**
     * @method include
     */
    include: function(array, item) {
        if(!T_Array.contains(array, item)) {
            array.push(item);
        }
    },

    // }}}
    // {{{ clone

    /**
     * @method clone
     */
    clone: function(array) {
        return arrayPrototype.slice.call(array);
    },

    // }}}
    // {{{ merge

    /**
     * @method merge
     */
    merge: function() {

        var source = arguments[0],
        toMerge = arrayPrototype.slice.call(arguments, 1),
        i, j, ln, subLn, array;

        for(i = 0, ln = toMerge.length; i < ln; i++) {
            array = toMerge[i];

            for(j = 0, subLn = array.length; j < subLn; j++) {
                T_Array.include(source, array[j]);
            }
        }

        return source;
    }

    // }}}

};

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
