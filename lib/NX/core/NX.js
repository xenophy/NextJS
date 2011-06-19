/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX

/**
 * @class NX
 * @singleton
 */
(function() {

    if (typeof NX === 'undefined') {
        global.NX = {};
    }

    NX.global = global;

    // {{{ apply

    /**
     * 設定されたコンフィグオブジェクトをオブジェクトに全てコピーします。
     *
     * @param {Object} 適用されるオブジェクト
     * @param {Object} 適用するオブジェクト
     * @param {Object} 初期値として適用されるオブジェクト
     * @return {Object} 適用後のオブジェクト
     */
    NX.apply = function(object, config, defaults) {

        if (defaults) {
            NX.apply(object, defaults);
        }

        if (object && config && typeof config === 'object') {

            var i, j, k;

            for (i in config) {
                object[i] = config[i];
            }

        }

        return object;
    };

    // }}}

    NX.apply(NX, {

        // {{{ emptyFn

        /**
         * 再利用可能な空関数
         *
         * @prop emptyFn
         */
        emptyFn: function() {},

        // }}}
        // {{{ applyIf

        /**
         * プロパティ値が存在しないものに対して、設定されたコンフィグオブジェクトをオブジェクトにコピーします。
         * 既に存在するプロパティは上書きしません。
         *
         * @param {Object} 適用されるオブジェクト
         * @param {Object} 適用するオブジェクト
         * @return {Object} 適用後のオブジェクト
         */
        applyIf: function(object, config) {

            var property;

            if (object) {
                for (property in config) {
                    if (object[property] === undefined) {
                        object[property] = config[property];
                    }
                }
            }

            return object;
        },

        // }}}

    });

    NX.apply(NX, {

        // {{{ isEmpty

        isEmpty: function(value, allowEmptyString) {
            return (value === null) || (value === undefined) || (!allowEmptyString ? value === '' : false) || (NX.isArray(value) && value.length === 0);
        },

        // }}}
        // {{{ isArray

        isArray: Array.isArray,

        // }}}
        // {{{ isDate

        isDate: function(value) {
            return toString.call(value) === '[object Date]';
        },

        // }}}
        // {{{ isObject

        isObject: function(value) {
            return toString.call(value) === '[object Object]';
        },

        // }}}
        // {{{ isPrimitive

        isPrimitive: function(value) {
            var type = typeof value;

            return type === 'string' || type === 'number' || type === 'boolean';
        },

        // }}}
        // {{{ isFunction

        isFunction: function(value) {
            return typeof value === 'function';
        },

        // }}}
        // {{{ isNumber

        isNumber: function(value) {
            return typeof value === 'number' && isFinite(value);
        },

        // }}}
        // {{{ isNumeric

        isNumeric: function(value) {
            return !isNaN(parseFloat(value)) && isFinite(value);
        },

        // }}}
        // {{{ isString

        isString: function(value) {
            return typeof value === 'string';
        },

        // }}}
        // {{{ isBoolean

        isBoolean: function(value) {
            return typeof value === 'boolean';
        },

        // }}}
        // {{{ isDefined

        isDefined: function(value) {
            return typeof value !== 'undefined';
        },

        // }}}
        // {{{ isIterable

        isIterable: function(value) {
            return (value && typeof value !== 'string') ? value.length !== undefined : false;
        }

        // }}}

    });

    NX.apply(NX, {

        // {{{ clone

        clone: function(item) {
            if (item === null || item === undefined) {
                return item;
            }

            var type = toString.call(item);

            if (type === '[object Date]') {
                return new Date(item.getTime());
            }

            var i, j, k, clone, key;

            if (type === '[object Array]') {
                i = item.length;

                clone = [];

                while (i--) {
                    clone[i] = Ext.clone(item[i]);
                }

            } else if (type === '[object Object]' && item.constructor === Object) {
                clone = {};

                for (key in item) {
                    clone[key] = NX.clone(item[key]);
                }

           }

            return clone || item;
        },

        // }}}

    });

})();

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
