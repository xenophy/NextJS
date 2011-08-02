/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.ClassManager.createNamespaces

module.exports = function() {

    var root = NX.global,
        parts, part, i, j, ln, subLn;

    for(i = 0, ln = arguments.length; i < ln; i++) {

        parts = this.parseNamespace(arguments[i]);

        for(j = 0, subLn = parts.length; j < subLn; j++) {
            part = parts[j];

            if(typeof part !== 'string') {

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
