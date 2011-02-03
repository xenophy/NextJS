/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var path = require('path');

// }}}
// {{{ NX

/**
 * @class NX
 */
NX = {

    // {{{ versionDetail

    /**
     * @prop versionDetail
     */
    versionDetail: {major: 0, minor: 5, patch: 1, edition: 'dev'},

    // }}}
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
    apply: function(o, cfg, defaults) {

        if(defaults) {
            NX.apply(o, defaults);
        }

        if(o && cfg && typeof cfg === 'object') {
            for(var key in cfg) {
                o[key] = cfg[key];
            }
        }

        return o;
    },

    // }}}
    // {{{ applyIf

    /**
     * @method applyIf
     */
    applyIf : function(target, cfg) {

        if(NX.isObject(target)) {
            NX.iterate(cfg, function(prop, v) {
                if(target[prop] == undefined) {
                    target[prop] = v;
                }
            });
        }

        return target;
    },

    // }}}
    // {{{ arrayUnique

    /**
     * @method arrayUnique
     */
    arrayUnique : function(inputArr) {

        var key = '', tmp_arr2 = {}, val = '';
        var __array_search = function (needle, haystack) {
            var fkey = '';
            for (fkey in haystack) {
                if (haystack.hasOwnProperty(fkey)) {
                    if ((haystack[fkey] + '') === (needle + '')) {
                        return fkey;
                    }
                }
            }
            return false;
        };

        for (key in inputArr) {
            if (inputArr.hasOwnProperty(key)) {
                val = inputArr[key];
                if (false === __array_search(val, tmp_arr2)) {
                    tmp_arr2[key] = val;
                }
            }
        }

        return tmp_arr2;
    },

    // }}}
    // {{{ asort

    /**
     * @method asort
     */
    asort : function asort(arr, key) {
        arr.sort(function (b1, b2) {
            return b1[key] > b2[key] ? 1 : -1;
        });
    },

    // }}}
    // {{{ clone

    /**
     * @method clone
     */
    clone : function(obj) {

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
    },

    // }}}
    // {{{ escapeRe

    /**
     * @method escapeRe
     */
    escapeRe : function(s) {
        return s.replace(/([-.*+?^${}()|[\]\/\\])/g, "\\$1");
    },

    // }}}
    // {{{ each

    /**
     * @method each
     */
    each : function(arr, fn, scope) {

        if(NX.isEmpty(arr, true)){
            return;
        }

        if(!NX.isIterable(arr) || NX.isPrimitive(arr)){
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

            if(NX.isObject(superclass)) {
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
                NX.override(subclass, overrides);
            };

            subclassProto.superclass = subclassProto.supr = (function(){
                return superclassProto;
            });

            subclassProto.override = inlineOverrides;
            subclassProto.proto = subclassProto;

            subclass.override(overrides);
            subclass.extend = function(o) {
                return NX.extend(subclass, o);
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
    isArray : function(v) {
        return toString.apply(v) === '[object Array]';
    },

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
        return v === null || v === undefined || ((NX.isArray(v) && !v.length)) || (!allowBlank ? v === '' : false);
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

        if(NX.isArray(v) || v.callee){
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
        return NX.isString(v) || NX.isNumber(v) || NX.isBoolean(v);
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

        if(NX.isEmpty(obj)) {
            return;
        }

        if(NX.isIterable(obj)) {

            NX.each(obj, fn, scope);
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

        NX.iterate(arguments, function(v) {

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
        NX.apply(orgcls.prototype, overrides);
    },

    // }}}
    // {{{ sleep

    /**
     * @method sleep
     */
    sleep : function(ms) {

        var start = new Date;

        while(1) {
            var cur = new Date;
            if(ms <= cur.getTime() - start.getTime()) {
                break;
            }
        }

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

    }

    // }}}

};

// }}}
// {{{ version

/**
 * @prop version
 */
NX.version  = [NX.versionDetail.major, NX.versionDetail.minor, NX.versionDetail.patch].join('.');
NX.version += NX.versionDetail.edition;

// }}}
// {{{ ns

/**
 * @method ns
 */
NX.ns = NX.namespace;

// }}}
// {{{ require subclasses

NX.each([
    'controller/AbstractController',
    'controller/WebController',
    'controller/WebSocketController',
    'controller/Action',
    'controller/DirectAction',
    'module/adapter/AbstractAdapter',
    'module/adapter/MySQL',
    'module/AbstractModule',
    'module/Connection',
    'module/Module',
    'server/AbstractDispatcher',
    'server/Dispatcher',
    'server/HttpServer',
    'util/JSON',
    'util/MarkDown',
    'util/String',
    'util/Template',
    'util/template/Foreach',
    'util/template/If',
    'util/template/Include',
    'util/template/TextNode',
    'view/AbstractView',
    'view/WebView'
], function(item) {
    require('./' + item + '.js');
});

// }}}
// {{{ createServer

/**
 * @method createServer
 */
NX.createServer = NX.server.HttpServer.createServer;

// }}}
// {{{ trim

/**
 * @method trim
 */
NX.trim = NX.util.String.trim;

// }}}
// {{{ stripTags

/**
 * @method stripTags
 */
NX.stripTags = NX.util.String.stripTags;

// }}}
// {{{ stripScripts

/**
 * @method stripScripts
 */
NX.stripScripts = NX.util.String.stripScripts;

// }}}
// {{{ capitalize

/**
 * @method capitalize
 */
NX.capitalize = NX.util.String.capitalize;

// }}}
// {{{ explode

/**
 * @method explode
 */
NX.explode = NX.util.String.explode;

// }}}
// {{{ implode

/**
 * @method implode
 */
NX.implode = NX.util.String.implode;

// }}}
// {{{ sprintf

/**
 * @method sprintf
 */
NX.sprintf = NX.util.String.sprintf;

// }}}
// {{{ NX.encode

/**
 * @method encode
 */
NX.encode = NX.util.JSON.encode;

// }}}
// {{{ NX.decode

/**
 * @method decode
 */
NX.decode = NX.util.JSON.decode;

// }}}

// {{{ Next JS Enviroment

process.NXEnv = {
    name: process.env.NODE_ENV || 'development',
    port: 3000,
    testport: 15000,
    host: null,
    dirname: path.dirname(module.parent.filename),
    basename: path.basename(module.parent.filename),
    libdir: __dirname
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
