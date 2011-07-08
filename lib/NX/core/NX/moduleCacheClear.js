/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.moduleCacheClear

module.exports = function(path, mtime) {

    if(require.cache[path]) {

        if(!NX.$requires[path]) {
            NX.$requires[path] = {};
        }

        var prev = NX.$requires[path].mtime ||  new Date(1900, 1, 1);

        if(mtime && prev < mtime) {

            delete require.cache[path];

            NX.$requires[path].mtime = mtime;
        }

    }

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
