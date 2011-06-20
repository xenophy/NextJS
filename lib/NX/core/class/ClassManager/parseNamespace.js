/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.ClassManager.parseNamespace

module.exports = function(namespace) {

    if (typeof namespace !== 'string') {
        NX.Error.raise({
            sourceClass: "NX.ClassManager",
            sourceMethod: "parseNamespace",
            msg: "Invalid namespace, must be a string"
        });
    }

    var cache = this.namespaceParseCache;

    if (this.enableNamespaceParseCache) {
        if (cache.hasOwnProperty(namespace)) {
            return cache[namespace];
        }
    }

    var parts = [],
    rewrites = this.namespaceRewrites,
    rewrite, from, to, i, ln, root = NX.global;

    for (i = 0, ln = rewrites.length; i < ln; i++) {
        rewrite = rewrites[i];
        from = rewrite.from;
        to = rewrite.to;

        if (namespace === from || namespace.substring(0, from.length) === from) {
            namespace = namespace.substring(from.length);

            if (typeof to !== 'string') {
                root = to;
            } else {
                // parts = parts.concat(to.split('.'));
            }

            break;
        }
    }

    parts.push(root);

    parts = parts.concat(namespace.split('.'));

    if (this.enableNamespaceParseCache) {
        cache[namespace] = parts;
    }

    return parts;
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
