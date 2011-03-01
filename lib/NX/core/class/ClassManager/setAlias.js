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
// {{{ NX.ClassManager.setAlias

var $METHOD = module.exports = function(cls, alias) {

    var aliasToNameMap = this.maps.aliasToName,
        nameToAliasesMap = this.maps.nameToAliases,
        className;

    if(T_NX.isString(cls)) {
        className = cls;
    } else {
        className = this.getName(cls);
    }

    if(alias && aliasToNameMap[alias] !== className) {

        if(aliasToNameMap.hasOwnProperty(alias) && T_NX.isDefined(window.console)) {

            console.log("[NX.ClassManager] Overriding already existed alias: '" + alias + "' " +
                        "of: '" + aliasToNameMap[alias] + "' with: '" + className + "'. Be sure it's intentional.");
        }

        aliasToNameMap[alias] = className;
    }

    if(!nameToAliasesMap[className]) {
        nameToAliasesMap[className] = [];
    }

    if(alias) {
        T_Array.include(nameToAliasesMap[className], alias);
    }

    return this;
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
