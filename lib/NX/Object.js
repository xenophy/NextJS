/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.Object

/**
 * @class NX.Object
 */
var T_Object = module.exports = {

    toQueryString: function(object, pre) {
        var encode = window.encodeURIComponent,
            buf = [],
            empty = Ext.isEmpty,
            result;

        Ext.iterate(object, function(key, item){
            if (!empty(item)) {
                Ext.each(item, function(val){
                    result = '';
                    if (!empty(val)) {
                        result = Ext.isDate(val) ? Ext.JSON.encode(val).replace(/"/g, '') : encode(val);
                    }
                    buf.push('&', encode(key), '=', result);
                });
            } else {
                buf.push('&', encode(key), '=');
            }
        });

        if (!pre) {
            buf.shift();
            pre = '';
        }

        return pre + buf.join('');
    },

    each: function(obj, fn, scope) {
        var prop;

        scope = scope || obj;

        for (prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                if (fn.call(scope || obj, prop, obj[prop], obj) === false) {
                    return;
                }
            }
        }
    },

    merge: function(source, key, value) {
        if (Ext.isString(key)) {
            if (Ext.isObject(value) && Ext.isObject(source[key])) {
                if (value.constructor && value.constructor === Object) {
                    Ext.Object.merge(source[key], value);
                } else {
                    source[key] = value;
                }
            }
            else {
                source[key] = Ext.clone(value);
            }

            return source;
        }

        var i = 1,
            len = arguments.length,
            obj,
            prop;

        for (; i < len; i++){
            obj = arguments[i];
            for (prop in obj) {
                if (obj.hasOwnProperty(prop)) {
                    Ext.merge(source, prop, obj[prop]);
                }
            }
        }

        return source;
    },

    keyOf: function(object, value) {
        for (var prop in object) {
            if (object.hasOwnProperty(prop) && object[prop] === value) {
                return prop;
            }
        }
        return null;
    },

    getValues: function(object) {
        var values = [], prop;

        for (prop in object) {
            if (object.hasOwnProperty(prop)) {
                values.push(object[prop]);
            }
        }
        return values;
    },

    getKeys: function(object) {
        var keys = [], prop;

        for (prop in object) {
            if (object.hasOwnProperty(prop)) {
                keys.push(prop);
            }
        }
        return keys;
    },

    getSize: function(object) {
        var size = 0, prop;

        for (prop in object) {
            if (object.hasOwnProperty(prop)) {
                size++;
            }
        }

        return size;
    }

};

/*
Ext.merge = function() {
    return Ext.Object.merge.apply(Ext.Object, arguments);
}
*/


/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
