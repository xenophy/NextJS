/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var T_NX = require('../../../core');
var T_Array = require('../../lang/Array');

// }}}
// {{{ NX.ClassManager.instantiate

var $METHOD = module.exports = function() {

    var args = T_Array.toArray(arguments),
        name = args.shift(),
        alias = name,
        temp = function() {},
        possibleName, cls, constructor, instanceCls;

    if(!T_NX.isString(name) || name.length < 1) {
        throw new Error("[NX.create] Invalid class name or alias: '" + name + "', must be a valid string");
    }

    cls = this.get(name);

    if(!cls) {
        possibleName = this.getNameByAlias(name);

        if(possibleName) {
            name = possibleName;
            cls = this.get(name);
        }
    }

    if(!cls) {
        possibleName = this.getNameByAlternate(name);

        if(possibleName) {
            name = possibleName;
            cls = this.get(name);
        }
    }

    if(!cls) {

        if(T_NX.isDefined(global.console)) {
            console.warn("Not Found " + (possibleName ? alias : name) + '.');
        }

        T_Loader.enableSyncMode(true);

        T_NX.require(name, function() {
            T_Loader.triggerReady();
            T_Loader.enableSyncMode(false);
        });

        cls = this.get(name);
    }

    if(!cls) {
        throw new Error("[NX.ClassManager] Cannot create an instance of unrecognized class name / alias: " + alias);
    }

    if (!T_NX.isFunction(cls)) {
        throw new Error("[NX.create] '" + name + "' is a singleton and cannot be instantiated");
    }

    constructor = cls.prototype.constructor;

    instanceCls = function() {
        return constructor.apply(this, args);
    };

    temp.prototype = cls.prototype;
    instanceCls.prototype = new temp();
    instanceCls.prototype.constructor = instanceCls;

    return new instanceCls();
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
