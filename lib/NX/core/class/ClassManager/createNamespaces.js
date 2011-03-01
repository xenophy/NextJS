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
// {{{ NX.ClassManager.createNamespace

var $METHOD = module.exports = function(parseNamespace, namespaceRewrites, args) {

    var root = global,
        namespaces = T_Array.toArray(args),
        parts, part, i, j, ln, subLn;

    for(i = 0, ln = namespaces.length; i < ln; i++) {

        parts = parseNamespace(namespaceRewrites, namespaces[i]);

        for(j = 0, subLn = parts.length; j < subLn; j++) {
            part = parts[j];

            if(!T_NX.isString(part)) {
                root = part;
            } else {
                if(!root[part]) {
                    root[part] = {};
                }
                root = root[part];
            }
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
