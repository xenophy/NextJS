/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var T_NX = require('../../../core');

// }}}
// {{{ NX.ClassManager.exist

var $METHOD = module.exports = function(classes, existCache, className) {

    var i, ln, part, root, parts;

    if(!className) {
        return false;
    }

    if(T_NX.isArray(className)) {
        for(i = 0; i < className.length; i++) {
            if(!this.exist.call(this, className[i])) {
                return false;
            }
        }

        return true;
    }

    if (!T_NX.isString(className)) {
        throw new Error("[NX.ClassManager.exist] Invalid classname, must be a string");
    }

    if(classes.hasOwnProperty(className) || this.existCache.hasOwnProperty(className)) {
        return true;
    }

    root = global;
    parts = this.parseNamespace(className);

    for(i = 0, ln = parts.length; i < ln; i++) {
        part = parts[i];

        if(!T_NX.isString(part)) {
            root = part;
        } else {
            if(!root || !root[part]) {
                return false;
            }

            root = root[part];
        }
    }

    // TODO:Loaderの扱いをどうするか？
    T_Loader.historyPush(className);

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
