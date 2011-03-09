/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var T_NX = require('../../../core');

// }}}
// {{{ NX.Base.callParent

var $METHOD = module.exports = function(args) {

    var method = this.callParent.caller, parentCls, methodName;

    /*
    if(!method.$owner) {

        if(!method.caller) {

            throw new Error("[" + T_NX.getClassName(this) + "#callParent] Calling a protected method from the " +
                            "public scope");
        }

        method = method.caller;
    }
    */

    parentCls = method.$owner.superclass;
    methodName = method.$name;

    if(!(methodName in parentCls)) {
        throw new Error("[" + T_NX.getClassName(this) + "#" + methodName + "] this.parent was called but there's no " +
                        "such method (" + methodName + ") found in the parent class (" + (T_NX.getClassName(parentCls) || 'Object') + ")");
    }

    return parentCls[methodName].apply(this, args || []);
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
