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

var qs = require('querystring');

// }}}
// {{{ NX.Object

/**
 * @class NX.Object
 */
var T_Object = module.exports = {

    // {{{ toQueryString

    /**
     * @method toQueryString
     */
    toQueryString: function(o, pre) {

        var ret = qs.stringify(o);
        if(pre) {
            ret = pre + ret;
        }

        return ret;
    },

    // }}}
    // {{{ each

    /**
     * @method each
     */
    each: function(obj, fn, scope) {

        var prop;
        scope = scope || obj;

        for(prop in obj) {
            if(obj.hasOwnProperty(prop)) {
                if(fn.call(scope || obj, prop, obj[prop], obj) === false) {
                    return;
                }
            }
        }
    },

    // }}}
    // {{{ merge

    /**
     * @method merge
     */
    merge: function(source, key, value) {

        if(T_NX.isString(key)) {
            if(T_NX.isObject(value) && T_NX.isObject(source[key])) {
                T_Object.merge(source[key], value);
            } else {
                source[key] = T_NX.clone(value);
            }

            return source;
        }

        var i = 1,
            len = arguments.length,
            obj,
            prop;

        for(; i < len; i++) {
            obj = arguments[i];
            for(prop in obj) {
                if(obj.hasOwnProperty(prop)) {
                    T_NX.merge(source, prop, obj[prop]);
                }
            }
        }

        return source;
    },

    // }}}
    // {{{ keyOf

    /**
     * @method keyOf
     */
    keyOf: function(object, value) {
        for (var prop in object) {
            if (object.hasOwnProperty(prop) && object[prop] === value) {
                return prop;
            }
        }
        return null;
    },

    // }}}
    // {{{ getValues

    /**
     * @method getValues
     */
    getValues: function(object) {
        var values = [], prop;

        for (prop in object) {
            if (object.hasOwnProperty(prop)) {
                values.push(object[prop]);
            }
        }
        return values;
    },

    // }}}
    // {{{ getKeys

    /**
     * @method getKeys
     */
    getKeys: function(object) {
        var keys = [], prop;

        for (prop in object) {
            if (object.hasOwnProperty(prop)) {
                keys.push(prop);
            }
        }
        return keys;
    },

    // }}}
    // {{{ getSize

    /**
     * @method getSize
     */
    getSize: function(object) {
        var size = 0, prop;

        for (prop in object) {
            if (object.hasOwnProperty(prop)) {
                size++;
            }
        }

        return size;
    }

    // }}}

};

// {{{ NX.merge

T_NX.merge = function() {
    return T_Object.merge.apply(T_Object, arguments);
}

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
