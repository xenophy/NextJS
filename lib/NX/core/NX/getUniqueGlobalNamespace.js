/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.getUniqueGlobalNamespace

module.exports = function() {

    var uniqueGlobalNamespace = this.uniqueGlobalNamespace;

    if(uniqueGlobalNamespace === undefined) {

        var i = 0;

        do {
            uniqueGlobalNamespace = 'NXBox' + (++i);
        } while (NX.global[uniqueGlobalNamespace] !== undefined);

        NX.global[uniqueGlobalNamespace] = NX;
        this.uniqueGlobalNamespace = uniqueGlobalNamespace;
    }

    return uniqueGlobalNamespace;
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
