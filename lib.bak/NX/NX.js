/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

/**
 * @class NX
 */

// {{{ versionDetail

/**
 * @prop versionDetail
 */
exports.versionDetail = {
    major : 0,
    minor : 1,
    patch : 1
}

// }}}
// {{{ version

/**
 * @prop version
 */
exports.version = [
    this.versionDetail.major,
    this.versionDetail.minor,
    this.versionDetail.patch
].join('.');

// }}}
// {{{ emptyFn

/**
 * @prop emptyFn
 */
exports.emptyFn = function() {};

// }}}
// {{{ apply

/**
 * @method apply
 */
exports.apply = function(o, config, defaults) {

    if(defaults) {
        this.apply(o, defaults);
    }

    if(o && config && typeof config === 'object') {
        for(var key in config) {
            o[key] = config[key];
        }
    }

    return o;
};

// }}}
// {{{ applyIf

/**
 * @method applyIf
 */
exports.applyIf = function(target, config) {

    var me = this;

    if(me.isObject(target)) {
        me.iterate(config, function(prop, v) {
            if(target[prop] == undefined) {
                target[prop] = v;
            }
        });
    }

    return target;
};

// }}}
// {{{ asort

/**
 * @method asort
 */
exports.asort = function asort(arr, key) {
    arr.sort(function (b1, b2) {
        return b1[key] > b2[key] ? 1 : -1;
    });
};

// }}}
// {{{ clone

/**
 * @method clone
 */
exports.clone = function(obj) {

    function doClone(o) {

        if(!o || 'object' !== typeof o) {
            return o;
        }

        if('function' === typeof o.clone) {
            return o.clone();
        }

        if(o.hasOwnProperty('__clonedTo')) {
            return o.__clonedTo;
        }

        var c = '[object Array]' === Object.prototype.toString.call(o) ? [] : {};

        o.__clonedTo = c;

        var p, v;

        for(p in o) {

            if((p !== '__clonedTo') && o.hasOwnProperty(p)) {

                v = o[p];

                if(v && 'object' === typeof v) {
                    c[p] = doClone(v);
                } else {
                    c[p] = v;
                }

            }
        }

        return c;
    }

    function finalizeClone(o) {

        if(o.hasOwnProperty('__clonedTo')) {

            delete o.__clonedTo;
            var p, v;

            for(p in o) {
                if(o.hasOwnProperty(p)) {
                    v = o[p];
                    if(v && 'object' === typeof v) {
                        finalizeClone(v);
                    }
                }
            }
        }
    }

    var clone = doClone(obj);

    finalizeClone(obj);

    return clone;
};

// }}}
// {{{ escapeRe

/**
 * @method escapeRe
 */
exports.escapeRe = function(s) {
    return s.replace(/([-.*+?^${}()|[\]\/\\])/g, "\\$1");
},

// }}}
// {{{ each

/**
 * @method each
 */
exports.each = function(arr, fn, scope) {

    var me = this;

    if(me.isEmpty(arr, true)){
        return;
    }

    if(!me.isIterable(arr) || me.isPrimitive(arr)){
        arr = [arr];
    }

    for(var i = 0, len = arr.length; i < len; i++){
        if(fn.call(scope || arr[i], arr[i], i, arr) === false){
            return i;
        };
    }
};

// }}}
// {{{ extend

/**
 * @method extend
 */
exports.extend = function() {

    var inlineOverrides = function(o) {
        for(var m in o) {
            this[m] = o[m];
        }
    };

    var objectConstructor = Object.prototype.constructor;

    return function(subclass, superclass, overrides) {

        var me = this;

        if(me.isObject(superclass)) {
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
            me.override(subclass, overrides);
        };

        subclassProto.superclass = subclassProto.supr = (function(){
            return superclassProto;
        });

        subclassProto.override = inlineOverrides;
        subclassProto.proto = subclassProto;

        subclass.override(overrides);
        subclass.extend = function(o) {
            return me.extend(subclass, o);
        };

        return subclass;
    };

}();

// }}}
// {{{ isArray

/**
 * @method isArray
 */
exports.isArray = function(v) {
    return toString.apply(v) === '[object Array]';
};

// }}}
// {{{ isBoolean

/**
 * @method isBoolean
 */
exports.isBoolean = function(v) {
    return typeof v === 'boolean';
};

// }}}
// {{{ isDate

/**
 * @method isDate
 */
exports.isDate = function(v) {
    return toString.apply(v) === '[object Date]';
};

// }}}
// {{{ isNull

/**
 * @method isNull
 */
exports.isNull = function(v) {
    return v === null;
};

// }}}
// {{{ isDefined

/**
 * @method isDefined
 */
exports.isDefined = function(v) {
    return typeof v !== 'undefined';
};

// }}}
// {{{ isEmpty

/**
 * @method isEmpty
 */
exports.isEmpty = function(v, allowBlank) {
    return v === null || v === undefined || ((this.isArray(v) && !v.length)) || (!allowBlank ? v === '' : false);
};

// }}}
// {{{ isFunction

/**
 * @method isFunction
 */
exports.isFunction = function(v) {
    return toString.apply(v) === '[object Function]';
};

// }}}
// {{{ isIterable

/**
 * @method isIterable
 */
exports.isIterable = function(v) {

    if(this.isArray(v) || v.callee){
        return true;
    }

    return false;
};

// }}}
// {{{ isNumber

/**
 * @method isNumber
 */
exports.isNumber = function(v) {
    return typeof v === 'number' && isFinite(v);
};

// }}}
// {{{ isObject

/**
 * @method isObject
 */
exports.isObject = function(v) {
    return !!v && Object.prototype.toString.call(v) === '[object Object]';
};

// }}}
// {{{ isPrimitive

/**
 * @method isPrimitive
 */
exports.isPrimitive = function(v) {

    var me = this;

    return me.isString(v) || me.isNumber(v) || me.isBoolean(v);

};

// }}}
// {{{ isString

/**
 * @method isString
 */
exports.isString = function(v) {
    return typeof v === 'string';
};

// }}}
// {{{ iterate

/**
 * @method iterate
 */
exports.iterate = function(obj, fn, scope) {

    var me = this;

    if(me.isEmpty(obj)) {
        return;
    }

    if(me.isIterable(obj)) {

        me.each(obj, fn, scope);
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

};

// }}}
// {{{ namespace

/**
 * @method namespace
 */
exports.ns = exports.namespace = function() {

    var o, p, g = global;

    this.iterate(arguments, function(v) {

        p = v.split(".");
        o = g[p[0]] = Object(g[p[0]]);

        for(x = 1, xln = p.length; x < xln; x++) {
            o = o[p[x]] = Object(o[p[x]]);
        }

    });

    return o;
};

// }}}
// {{{ override

/**
 * @method override
 */
exports.override = function(orgcls, overrides) {
    this.apply(orgcls.prototype, overrides);
};

// }}}
// {{{ sleep

/**
 * @method sleep
 */
exports.sleep = function(ms) {

    var start = new Date;

    while(1) {
        var cur = new Date;
        if(ms <= cur.getTime() - start.getTime()) {
            break;
        }
    }

};

// }}}
// {{{ toArray

/**
 * @method toArray
 */
exports.toArray = function(arr, start, end) {
    return Array.prototype.slice.call(arr, start || 0, end || arr.length);
};

// }}}
// {{{ toBoolean

/**
 * @method toBoolean
 */
exports.toBoolean = function(obj) {
    return typeof obj === 'string'
    ? (/^(y(es)?|true|1)$/).test(obj)
    : !! obj;
};

// }}}
// {{{ moduleCacheClear

/**
 * @method moduleCacheClear
 */
exports.moduleCacheClear = function(filepath) {

    if(require.cache[filepath]) {
        delete require.cache[filepath];
    }

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
