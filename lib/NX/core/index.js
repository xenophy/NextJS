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
    clone : function(item) {

        if(!item) {
            return item;
        }

        if(item instanceof Date) {
            return new Date(item.getTime());
        }

        var i, j, k, clone, key;

        if(this.isArray(item)) {
            i = item.length;

            clone = new Array(i);

            while(i--) {
                clone[i] = this.clone(item[i]);
            }

        } else if(this.isObject(item)) {

            clone = item.constructor ? new item.constructor() : {};

            for(key in item) {
                clone[key] = this.clone(item[key]);
            }

        }

        return clone || item;
    },

    // }}}
    // {{{ each

    /**
     * @method each
     */
    each : function(arr, fn, scope) {

        if(T_NX.isEmpty(arr, true)){
            return;
        }

        if(!T_NX.isIterable(arr) || T_NX.isPrimitive(arr)){
            arr = [arr];
        }

        for(var i = 0, len = arr.length; i < len; i++){
            if(fn.call(scope || arr[i], arr[i], i, arr) === false){
                return i;
            };
        }
    },

    // }}}
    // {{{ extend

    /**
     * @method extend
     */
    extend : function() {

        var inlineOverrides = function(o) {
            for(var m in o) {
                this[m] = o[m];
            }
        };

        var objectConstructor = Object.prototype.constructor;

        return function(subclass, superclass, overrides) {

            if(T_NX.isObject(superclass)) {
                overrides = superclass;
                superclass = subclass;
                subclass = overrides.constructor != objectConstructor
                ? overrides.constructor
                : function(){ superclass.apply(this, arguments); };
            }

            if(!superclass) {
                throw "The specified superclass object is illegal.";
            }

            var F = function(){},
            subclassProto,
            superclassProto = superclass.prototype;

            F.prototype = superclassProto;
            subclassProto = subclass.prototype = new F();
            subclassProto.constructor = subclass;
            subclass.superclass = superclassProto;

            if(superclassProto.constructor == objectConstructor){
                superclassProto.constructor = superclass;
            }

            subclass.override = function(overrides){
                T_NX.override(subclass, overrides);
            };

            subclassProto.superclass = subclassProto.supr = (function(){
                return superclassProto;
            });

            subclassProto.override = inlineOverrides;
            subclassProto.proto = subclassProto;

            subclass.override(overrides);
            subclass.extend = function(o) {
                return T_NX.extend(subclass, o);
            };

            return subclass;
        };
    }(),

    // }}}
    // {{{ inArray

    /**
     * @method inArray
     */
    inArray : function(needle, haystack, argStrict) {

        var key = '', strict = !!argStrict;

        if(strict) {
            for(key in haystack) {
                if(haystack[key] === needle) {
                    return true;
                }
            }
        } else {
            for(key in haystack) {
                if(haystack[key] == needle) {
                    return true;
                }
            }
        }

        return false;
    },

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
