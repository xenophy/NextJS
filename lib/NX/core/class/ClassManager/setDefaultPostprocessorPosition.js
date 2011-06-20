/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.ClassManager.setDefaultPostprocessorPosition

module.exports = function(name, offset, relativeName) {
    var defaultPostprocessors = this.defaultPostprocessors, index;

    if(typeof offset === 'string') {
        if (offset === 'first') {
            defaultPostprocessors.unshift(name);

            return this;
        }
        else if (offset === 'last') {
            defaultPostprocessors.push(name);

            return this;
        }

        offset = (offset === 'after') ? 1 : -1;
    }

    index = NX.Array.indexOf(defaultPostprocessors, relativeName);

    if(index !== -1) {
        NX.Array.splice(defaultPostprocessors, Math.max(0, index + offset), 0, name);
    }

    return this;
};


// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
