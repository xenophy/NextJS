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
// {{{ NX.ClassManager.assignNamespace

var $METHOD = module.exports = function(name, value) {

    var root = global,
    parts = this.parseNamespace(name),
    leaf = parts.pop(),
    i, ln, part;

    for(i = 0, ln = parts.length; i < ln; i++) {
        part = parts[i];

        if(!T_NX.isString(part)) {
            root = part;
        } else {
            if(!root[part]) {
                root[part] = {};
            }

            root = root[part];
        }
    }

    root[leaf] = value;

    return root[leaf];
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
