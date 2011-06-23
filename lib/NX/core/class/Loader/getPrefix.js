/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.Loader.getPrefix

module.exports = function(className) {

    var paths = this.config.paths, prefix, deepestPrefix = '';

    if(paths.hasOwnProperty(className)) {
        return className;
    }

    for(prefix in paths) {

        if(paths.hasOwnProperty(prefix) && prefix + '.' === className.substring(0, prefix.length + 1)) {

            if (prefix.length > deepestPrefix.length) {

                deepestPrefix = prefix;

            }
        }
    }

    return deepestPrefix;
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */

