/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var T_String = require('../../lang/String');
var flexSetter = require('../../lang/Function').flexSetter;

// }}}
// {{{ NX.Base.callOverridden

var $METHOD = module.exports = function(args) {

    var method = this.callOverridden.caller;

    /*
    if(!method.$owner) {
        throw new Error("[" + T_NX.getClassName(this) + "#callOverridden] Calling a protected method from the " +
                        "public scope");
    }
    */

    if(!method.$previous) {
        throw new Error("[" + T_NX.getClassName(this) + "] this.callOverridden was called in '" + method.$name +
                        "' but this method has never been overridden");
    }

    return method.$previous.apply(this, args || []);
}

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
