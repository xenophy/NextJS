/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var T_NX = require('../../../core');

// }}}
// {{{ NX.ClassManager.get

var $METHOD = module.exports = function(classes, parseNamespace, namespaceRewrites, name) {

    if(classes.hasOwnProperty(name)) {
        return classes[name];
    }

    var root = global,
        parts = parseNamespace(namespaceRewrites, name),
        part, i, ln;

    for(i = 0, ln = parts.length; i < ln; i++) {
        part = parts[i];

        if(!T_NX.isString(part)) {
            root = part;
        } else {
            if(!root || !root[part]) {
                return null;
            }

            root = root[part];
        }
    }

    return root;
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
