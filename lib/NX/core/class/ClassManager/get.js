/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.ClassManager.get

module.exports = function(name) {

    if(this.classes.hasOwnProperty(name)) {
        return this.classes[name];
    }

    var root = NX.global,
        parts = this.parseNamespace(name),
        part, i, ln;

    for (i = 0, ln = parts.length; i < ln; i++) {
        part = parts[i];

        if (typeof part !== 'string') {
            root = part;
        } else {
            if (!root || !root[part]) {
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
