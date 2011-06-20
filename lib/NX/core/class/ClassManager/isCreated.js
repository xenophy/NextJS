/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.ClassManager.isCreated

module.exports = function(className) {
    var i, ln, part, root, parts;

    if (typeof className !== 'string' || className.length < 1) {
        NX.Error.raise({
            sourceClass: "NX.ClassManager",
            sourceMethod: "exist",
            msg: "Invalid classname, must be a string and must not be empty"
        });
    }

    if (this.classes.hasOwnProperty(className) || this.existCache.hasOwnProperty(className)) {
        return true;
    }

    root = NX.global;
    parts = this.parseNamespace(className);

    for (i = 0, ln = parts.length; i < ln; i++) {
        part = parts[i];

        if (typeof part !== 'string') {
            root = part;
        } else {
            if (!root || !root[part]) {
                return false;
            }

            root = root[part];
        }
    }

    NX.Loader.historyPush(className);

    this.existCache[className] = true;

    return true;
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
