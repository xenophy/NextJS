/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.Class.preprocessors.className

var $METHOD = module.exports = function(cls, data, fn) {

    if(data.$className) {
        cls.$className = data.$className;
        cls.displayName = cls.$className;
    }

    if(fn) {
        fn.call(this, cls, data);
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
