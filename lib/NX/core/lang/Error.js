/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

(function() {

var NXError = NX.Error = function(config) {

    if (NX.isString(config)) {
        config = { msg: config };
    }

    NX.apply(this, config);
    this.message = this.message || this.msg;
};
NXError.prototype = new Error();

NX.apply(NXError, {

    // {{{ ignore

    ignore: false,

    // }}}
    // {{{ raise

    raise: function(err) {

        err = err || {};

        if (NX.isString(err)) {
            err = { msg: err };
        }

        var method = this.raise.caller;

        if (method) {
            if (method.$name) {
                err.sourceMethod = method.$name;
            }
            if (method.$owner) {
                err.sourceClass = method.$owner.$className;
            }
        }

        if (NX.Error.handle(err) !== true) {

            var msg = NXError.prototype.toString.call(err);

            NX.log({
                msg: msg,
                level: 'error',
                dump: err,
                stack: true
            });

            throw new NXError(err);
        }
    },

    // }}}
    // {{{ handle

    handle: function() {
        return NXError.ignore;
    }

    // }}}

});

NX.apply(NXError.prototype, {

    // {{{ name

    name: 'NX.Error',

    // }}}
    // {{{ toString

    toString: function() {

        var me = this,
            className = me.className ? me.className  : '',
            methodName = me.methodName ? '.' + me.methodName + '(): ' : '',
            msg = me.msg || '(No description provided)';

        return className + methodName + msg;
    }

    // }}}

});

})();

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
