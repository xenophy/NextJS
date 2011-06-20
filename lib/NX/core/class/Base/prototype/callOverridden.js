/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.Base.prototype.callOverridden

module.exports = function(args) {

    var method = this.callOverridden.caller;

    if (!method.$owner) {
        NX.Error.raise({
            sourceClass: NX.getClassName(this),
            sourceMethod: "callOverridden",
            msg: "Attempting to call a protected method from the public scope, which is not allowed"
        });
    }

    if (!method.$previous) {
        NX.Error.raise({
            sourceClass: NX.getClassName(this),
            sourceMethod: "callOverridden",
            msg: "this.callOverridden was called in '" + method.$name +
                "' but this method has never been overridden"
        });
    }

    return method.$previous.apply(this, args || []);
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
