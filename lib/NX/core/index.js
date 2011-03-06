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
    isBoolean : require('./isBoolean'),

    // }}}
    // {{{ isDate

    /**
     * @method isDate
     */
    isDate : require('./isDate'),

    // }}}
    // {{{ isNull

    /**
     * @method isNull
     */
    isNull : require('./isNull'),

    // }}}
    // {{{ isDefined

    /**
     * @method isDefined
     */
    isDefined : require('./isDefined'),

    // }}}
    // {{{ isEmpty

    /**
     * @method isEmpty
     */
    isEmpty : require('./isEmpty'),

    // }}}
    // {{{ isFunction

    /**
     * @method isFunction
     */
    isFunction : require('./isFunction'),

    // }}}
    // {{{ isIterable

    /**
     * @method isIterable
     */
    isIterable : require('./isIterable'),

    // }}}
    // {{{ isNumber

    /**
     * @method isNumber
     */
    isNumber : require('./isNumber'),

    // }}}
    // {{{ isObject

    /**
     * @method isObject
     */
    isObject : require('./isObject'),

    // }}}
    // {{{ isPrimitive

    /**
     * @method isPrimitive
     */
    isPrimitive : require('./isPrimitive'),

    // }}}
    // {{{ isString

    /**
     * @method isString
     */
    isString : require('./isString'),

    // }}}
    // {{{ iterate

    /**
     * @method iterate
     */
    iterate : require('./iterate'),

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
