/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.Array

/**
 * @class NX.Array
 */
var T_Array = module.exports = {

    each: function(array, fn, scope) {
        if (Ext.isEmpty(array, true)) {
            return 0;
        }

        if (!Ext.isIterable(array) || Ext.isPrimitive(array)) {
            array = [array];
        }

        for (var i = 0, len = array.length; i < len; i++) {
            if (fn.call(scope || array[i], array[i], i, array) === false) {
                return i;
            }
        }

        return true;
    },

    forEach: function(array, fn, scope) {
        if (supportsForEach) {
            return array.forEach(fn, scope);
        }

        return Ext.Array.each(array, fn, scope);
    },

    indexOf: function(array, item, from) {
        if (supportsIndexOf) {
            return array.indexOf(item, from);
        }

        var i, length = array.length;

        for (i = (from < 0) ? Math.max(0, length + from) : from || 0; i < length; i++) {
            if (array[i] === item) {
                return i;
            }
        }

        return -1;
    },

    contains: function(array, item) {
        return (Ext.Array.indexOf(array, item) !== -1);
    },

    toArray: function(array, start, end) {
        return Array.prototype.slice.call(array, start || 0, end || array.length);
    },

    pluck: function(arr, prop) {
        var ret = [];
        Ext.each(arr, function(v) {
            ret.push(v[prop]);
        });
        return ret;
    },

    map: function(array, fn, scope) {
        if (!fn) {
            throw new Error("[Ext.Array.map] fn must be a valid callback function");
        }

        if (supportsMap) {
            return array.map(fn, scope);
        }

        var results = [],
        i = 0,
        len = array.length;

        for (; i < len; i++) {
            if (i in array) {
                results[i] = fn.call(scope, array[i], i, array);
            }
        }

        return results;
    },

    every: function(array, fn, scope) {
        if (supportsEvery) {
            return array.every(fn, scope);
        }

        var i = 0,
        len = array.length;

        for (; i < len; ++i) {
            if (i in array && !fn.call(scope, array[i], i, array)) {
                return false;
            }
        }
        return true;
    },

    some: function(array, fn, scope) {
        if (supportsSome) {
            return array.some(fn, scope);
        }

        var i = 0,
        len = array.length;

        for (; i < len; ++i) {
            if (i in array && fn.call(scope, array[i], i, array)) {
                return true;
            }
        }
        return false;
    },

    clean: function(array) {
        var results = [],
        i, ln, item;

        for (i = 0, ln = array.length; i < ln; i++) {
            item = array[i];

            if (!Ext.isEmpty(item)) {
                results.push(item);
            }
        }

        return results;
    },

    unique: function(array) {
        var clone = [],
        me = Ext.Array;

        me.forEach(array, function(item) {
            if (!me.contains(clone, item)) {
                clone.push(item);
            }
        });

        return clone;
    },

    filter: function(array, fn, scope) {
        if (!fn) {
            throw new Error("[Ext.Array.filter] fn must be a valid callback function");
        }

        if (supportsFilter) {
            return array.filter(fn, scope);
        }

        var results = [],
        i = 0,
        len = array.length;

        for (; i < len; i++) {
            if ((i in array) && fn.call(scope, array[i], i, array)) {
                results.push(array[i]);
            }
        }

        return results;
    },

    from: function(value) {
        if (Ext.isIterable(value)) {
            return Ext.Array.toArray(value);
        }

        if (Ext.isDefined(value) && value !== null) {
            return [value];
        }

        return [];
    },

    remove: function(array, item) {
        var index = Ext.Array.indexOf(array, item);

        if (index !== -1) {
            array.splice(index, 1);
        }

        return array;
    },

    include: function(array, item) {
        if (!Ext.Array.contains(array, item)) {
            array.push(item);
        }
    },

    clone: function(array) {
        return arrayPrototype.slice.call(array);
    },

    merge: function() {
        var source = arguments[0],
        toMerge = arrayPrototype.slice.call(arguments, 1),
        i, j, ln, subLn, array;

        for (i = 0, ln = toMerge.length; i < ln; i++) {
            array = toMerge[i];

            for (j = 0, subLn = array.length; j < subLn; j++) {
                Ext.Array.include(source, array[j]);
            }
        }

        return source;
    }

};

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
