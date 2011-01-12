/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.util.Deferred

/**
 * @class NX.util.Deferred
 */
NX.util.Deferred = NX.extend(Object, {

    // {{{ constructor

    /**
     * @method Deferred
     */
    constructor : function() {

        var me = this;

        return (me instanceof NX.util.Deferred) ? me.init() : new NX.util.Deferred();
    },

    // }}}
    // {{{ init

    /**
     * @method init
     */
    init : function() {

        var me = this;

        me._next = null;
        me.callback = {
            ok: function (x) { return x },
            ng: function (x) { throw  x }
        };
        return this;
    },

    // }}}
    // {{{ next

    /**
     * @method next
     */
    next : function(fn) {

        var me = this;

        return me._post('ok', fn);
    },

    // }}}
    // {{{ error

    /**
     * @method error
     */
    error : function(fn) {

        var me = this;

        return me._post('ng', fn);
    },

    // }}}
    // {{{ call

    /**
     * @method call
     */
    call : function(v) {

        var me = this;

        return me._fire('ok', v);
    },

    // }}}
    // {{{ fail

    /**
     * @method fail
     */
    fail : function(err) {

        var me = this;

        return me._fire('ng', err);
    },

    // }}}
    // {{{ cancel

    /**
     * @method cancel
     */
    cancel : function () {

        var me = this;

        (me.canceller || NX.emptyFn)();

        return me.init();
    },

    // }}}
    // {{{ _post

    _post : function(okng, fn) {

        var me = this;

        me._next = new NX.util.Deferred();
        me._next.callback[okng] = fn;

        return me._next;
    },

    // }}}
    // {{{ _fire

    _fire : function(okng, value) {

        var me = this,
            next = 'ok';

        try {

            value = me.callback[okng].call(me, value);

        } catch(e) {

            next  = 'ng';
            value = e;

        }

        if(value instanceof NX.util.Deferred) {

            value._next = me._next;

        } else {

            if(me._next) {
                me._next._fire(next, value);
            }

        }

        return me;
    }

    // }}}

});

// }}}
// {{{ Deferred.wait

/**
 * @method Deferred.wait
 */
NX.util.Deferred.wait = function(n) {

    var d = new NX.util.Deferred(),
        t = new Date(),
        id = setTimeout(function () {
            clearTimeout(id);
            d.call((new Date).getTime() - t.getTime());
        }, n * 1000);

    d.canceller = function() {

        try {
            clearTimeout(id);
        } catch(e) {
        }

    };

    return d;
};

// }}}
// {{{ Deferred.next

/**
 * @method Deferred.next
 */
NX.util.Deferred.next = function(fn) {

    var d = new NX.util.Deferred(),
        id = setTimeout(function() {
            clearTimeout(id);
            d.call();
        }, 0);

    if(fn) {
        d.callback.ok = fun;
    }

    d.canceller = function() {

        try {
            clearTimeout(id);
        } catch(e) {
        }

    };

    return d;
};

// }}}
// {{{ Deferred.call

/**
 * @method Deferred.call
 */
NX.util.Deferred.call = function(f, args) {

    args = Array.prototype.slice.call(arguments);
    f    = args.shift();

    return NX.util.Deferred.next(function() {
        return f.apply(this, args);
    });

};

// }}}
// {{{ Deferred.register

/**
 * @method Deferred.register
 */
NX.util.Deferred.register = function(name, fn) {

    this.prototype[name] = function () {
        return this.next(NX.util.Deferred.wrap(fn).apply(null, arguments));
    };

};

// }}}
// {{{ Deferred.wrap

/**
 * @method Deferred.wrap
 */
NX.util.Deferred.wrap = function (dfn) {

    return function () {

        var a = arguments;

        return function () {
            return dfn.apply(null, a);
        };

    };

};

// }}}
// {{{ regist wait

NX.util.Deferred.register("wait", NX.util.Deferred.wait);

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
