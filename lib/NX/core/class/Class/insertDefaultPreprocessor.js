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
// {{{ NX.Class.insertDefaultPreprocessor

var $METHOD = module.exports = function(name, offset, relativeName) {

    var defaultPreprocessors = this.defaultPreprocessors, index;

    if(T_NX.isString(offset)) {

        if(offset === 'first') {
            defaultPreprocessors.unshift(name);
            return this;
        } else if(offset === 'last') {
            defaultPreprocessors.push(name);
            return this;
        }

        offset = (offset === 'after') ? 1 : -1;
    }

    index = T_Array.indexOf(defaultPreprocessors, relativeName);

    if(index !== -1) {
        defaultPreprocessors.splice(Math.max(0, index + offset), 0, name);
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
