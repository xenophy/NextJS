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
// {{{ NX.ClassManager.parseNamespace

var $METHOD = module.exports = function(namespace) {

    if(!T_NX.isString(namespace)) {
        throw new Error("[NX.ClassManager.parseNamespace] namespace must be a string");
    }

    var parts = [],
        rewrites = this.namespaceRewrites,
        rewrite, from, to, i, ln, root = global;

    for(i = 0, ln = rewrites.length; i < ln; i++) {
        rewrite = rewrites[i];
        from = rewrite.from;
        to = rewrite.to;

        if(namespace === from || namespace.substring(0, from.length) === from) {
            namespace = namespace.substring(from.length);

            if(!T_NX.isString(to)) {
                root = to;
            } else {
                parts = parts.concat(to.split('.'));
            }

            break;
        }
    }

    parts.push(root);

    parts = parts.concat(namespace.split('.'));

    return T_Array.clean(parts);
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
