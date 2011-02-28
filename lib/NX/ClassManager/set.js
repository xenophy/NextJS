/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var T_NX = require('../core');
var T_Array = require('../Array');

// }}}
// {{{ NX.ClassManager.set

var $METHOD = module.exports = function(classes, name, value) {

    var targetName = this.getName(value);

    classes[name] = this.assignNamespace(name, value);

    if(targetName && targetName !== name) {
        this.maps.alternateToName[name] = targetName;
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
