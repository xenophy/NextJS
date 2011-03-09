/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var T_NX = require('../../../../core');
var T_Array = require('../../../lang/Array');

// }}}
// {{{ NX.ClassManager.postprocessors.alias

var $METHOD = module.exports = function(name, cls, data, fn) {

    var aliases = T_Array.from(data.alias), widgetPrefix = 'widget.', i, ln, alias;

    for(i = 0, ln = aliases.length; i < ln; i++) {

        alias = aliases[i];

        if(!T_NX.isString(alias)) {
            throw new Error("[NX.define] Invalid alias of: '" + alias + "' for class: '" + name + "'; must be a valid string");
        }

        this.setAlias(cls, alias);
    }

    /*
    for(i = 0, ln = aliases.length; i < ln; i++) {

        alias = aliases[i];

        if(alias.substring(0, widgetPrefix.length) === widgetPrefix) {
            cls.xtype = cls.$xtype = alias.substring(widgetPrefix.length);
            break;
        }
    }
    */

    if(fn) {
        fn.call(this, name, cls, data);
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
