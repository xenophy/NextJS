/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var T_NX = require('../../../core');
var T_Array = require('../../lang/Array');

// }}}
// {{{ NX.ClassManager.insertDefaultPreprocessor

var $METHOD = module.exports = function(defaultPostprocessors, name, offset, relativeName) {

    var index;

    if(T_NX.isString(offset)) {

        if(offset === 'first') {
            defaultPostprocessors.unshift(name);
            return this;
        } else if (offset === 'last') {
            defaultPostprocessors.push(name);
            return this;
        }

        offset = (offset === 'after') ? 1 : -1;
    }

    index = T_Array.indexOf(defaultPostprocessors, relativeName);

    if(index !== -1) {
        defaultPostprocessors.splice(Math.max(0, index + offset), 0, name);
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
