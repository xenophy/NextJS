/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.Base.prototype.callParent

module.exports = function(args) {

    var method = this.callParent.caller,
        parentClass,
        methodName;

    if(!method.$owner) {

        if(!method.caller) {

            NX.Error.raise({
                sourceClass: NX.getClassName(this),
                sourceMethod: "callParent",
                msg: "Attempting to call a protected method from the public scope, which is not allowed"
            });

        }

        method = method.caller;
    }

    parentClass = method.$owner.superclass;
    methodName = method.$name;

    if(!(methodName in parentClass)) {

        NX.Error.raise({
            sourceClass: NX.getClassName(this),
            sourceMethod: methodName,
            msg: "this.callParent() was called but there's no such method (" + methodName + ") found in the parent class (" + (NX.getClassName(parentClass) || 'Object') + ")"
        });

    }

    return parentClass[methodName].apply(this, args || []);
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
