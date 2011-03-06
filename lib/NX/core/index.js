/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX

/**
 * @class NX
 */
var T_NX = module.exports = {

    // {{{ emptyFn

    /**
     * @prop emptyFn
     */
    emptyFn : function() {},

    // }}}
    // {{{ apply

    /**
     * @method apply
     */
    apply: require('./apply'),

    // }}}
    // {{{ applyIf

    /**
     * @method applyIf
     */
    applyIf: require('./applyIf'),

    // }}}
    // {{{ clone

    /**
     * @method clone
     */
    clone : require('./clone'),

    // }}}
    // {{{ each

    /**
     * @method each
     */
    each : require('./each'),

    // }}}
    // {{{ extend

    /**
     * @method extend
     */
    extend : require('./extend'),

    // }}}
    // {{{ isArray

    /**
     * @method isArray
     */
    isArray: require('./isArray'),

    // }}}
    // {{{ isBoolean

    /**
     * @method isBoolean
     */
    isBoolean : function(v) {
        return typeof v === 'boolean';
    },

    // }}}
    // {{{ isDate

    /**
     * @method isDate
     */
    isDate : function(v) {
        return toString.apply(v) === '[object Date]';
    },

    // }}}
    // {{{ isNull

    /**
     * @method isNull
     */
    isNull : function(v) {
        return v === null;
    },

    // }}}
    // {{{ isDefined

    /**
     * @method isDefined
     */
    isDefined : function(v) {
        return typeof v !== 'undefined';
    },

    // }}}
    // {{{ isEmpty

    /**
     * @method isEmpty
     */
    isEmpty : function(v, allowBlank) {
        return v === null || v === undefined || ((T_NX.isArray(v) && !v.length)) || (!allowBlank ? v === '' : false);
    },

    // }}}
    // {{{ isFunction

    /**
     * @method isFunction
     */
    isFunction : function(v) {
        return toString.apply(v) === '[object Function]';
    },

    // }}}
    // {{{ isIterable

    /**
     * @method isIterable
     */
    isIterable : function(v) {

        if(T_NX.isArray(v) || v.callee){
            return true;
        }

        return false;
    },

    // }}}
    // {{{ isNumber

    /**
     * @method isNumber
     */
    isNumber : function(v) {
        return typeof v === 'number' && isFinite(v);
    },

    // }}}
    // {{{ isObject

    /**
     * @method isObject
     */
    isObject : function(v) {
        return !!v && Object.prototype.toString.call(v) === '[object Object]';
    },

    // }}}
    // {{{ isPrimitive

    /**
     * @method isPrimitive
     */
    isPrimitive : function(v) {
        return T_NX.isString(v) || T_NX.isNumber(v) || T_NX.isBoolean(v);
    },

    // }}}
    // {{{ isString

    /**
     * @method isString
     */
    isString : function(v) {
        return typeof v === 'string';
    },

    // }}}
    // {{{ iterate

    /**
     * @method iterate
     */
    iterate : function(obj, fn, scope) {

        if(T_NX.isEmpty(obj)) {
            return;
        }

        if(T_NX.isIterable(obj)) {

            T_NX.each(obj, fn, scope);
            return;

        } else if(typeof obj == 'object' || typeof 'function') {

            for(var prop in obj){
                if(obj.hasOwnProperty(prop)){
                    if(fn.call(scope || obj, prop, obj[prop], obj) === false){
                        return;
                    };
                }
            }

        }

    },

    // }}}
    // {{{ namespace

    /**
     * @method namespace
     */
    namespace : function() {

        var o, p, g = global;

        T_NX.iterate(arguments, function(v) {

            p = v.split(".");
            o = g[p[0]] = Object(g[p[0]]);

            for(x = 1, xln = p.length; x < xln; x++) {
                o = o[p[x]] = Object(o[p[x]]);
            }

        });

        return o;
    },

    // }}}
    // {{{ override

    /**
     * @method override
     */
    override : function(orgcls, overrides) {
        T_NX.apply(orgcls.prototype, overrides);
    },

    // }}}
    // {{{ toArray

    /**
     * @method toArray
     */
    toArray : function(arr, start, end) {
        return Array.prototype.slice.call(arr, start || 0, end || arr.length);
    },

    // }}}
    // {{{ toBoolean

    /**
     * @method toBoolean
     */
    toBoolean : function(obj) {
        return typeof obj === 'string'
            ? (/^(y(es)?|true|1)$/).test(obj)
            : !! obj;
    },

    // }}}
    // {{{ moduleCacheClear

    /**
     * @method moduleCacheClear
     */
    moduleCacheClear : function(filepath) {

        if(require.cache[filepath]) {
            delete require.cache[filepath];
        }

    },

    // }}}
    // {{{ microtime

    /**
     * @method microtime
     */
    microtime : function(get_as_float) {
        var now = new Date().getTime() / 1000;
        var s = parseInt(now, 10);
        return (get_as_float) ? now : (Math.round((now - s) * 1000) / 1000) + ' ' + s;
    }

    // }}}

};

// }}}
// {{{ alias

T_NX.apply(T_NX, require('./aliases/NX'));
T_NX.apply(T_NX, require('./aliases/Object'));
T_NX.apply(T_NX, require('./aliases/ClassManager'));

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
