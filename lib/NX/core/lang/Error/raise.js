/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.Error.raise

module.exports = function(err) {

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

        var msg = NX.Error.prototype.toString.call(err);

        NX.log({
            msg: msg,
            level: 'error',
            dump: err,
            stack: true
        });

        throw NX.create('NX.Error', err);
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
