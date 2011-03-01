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
// {{{ NX.ClassManager.instantiateByAlias

var $METHOD = module.exports = function() {

    var args = T_Array.toArray(arguments),
    alias = args.shift(),
    className = this.getNameByAlias(alias);

    if(!className) {
        className = this.maps.aliasToName[alias];

        if(!className) {
            throw new Error("[NX.ClassManager] Cannot create an instance of unrecognized alias: " + alias);
        }

        if (T_NX.isDefined(window.console)) {
            console.warn("[NX.Loader] Synchronously loading '" + className + "'; consider adding " +
                         "NX.require('" + alias + "') above NX.onReady");
        }

        T_Loader.enableSyncMode(true);
        T_NX.require(className, function() {
            T_Loader.triggerReady();
            T_Loader.enableSyncMode(false);
        });
    }

    args.unshift(className);

    return this.instantiate.apply(this, args);
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
