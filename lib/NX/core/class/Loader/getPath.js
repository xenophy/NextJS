/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.Loader.getPath

module.exports = function(className) {

    var path = '',
        paths = this.config.paths,
        prefix = this.getPrefix(className);

    if (prefix.length > 0) {
        if (prefix === className) {
            return paths[prefix];
        }

        path = paths[prefix];
        className = className.substring(prefix.length + 1);
    }

    if (path.length > 0) {
        path += '/';
    }

    return path.replace(/\/\.\//g, '/') + className.replace(/\./g, "/") + '.js';
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */

