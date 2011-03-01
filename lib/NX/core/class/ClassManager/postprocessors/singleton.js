/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var T_NX = require('../../../../core');
var T_Array = require('../../../lang/Array');

// }}}
// {{{ NX.ClassManager.postprocessors.singleton

var $METHOD = module.exports = function(name, cls, data, fn) {

    if(data.singleton === true) {
        cls = new cls();
    }

    if(fn) {
        fn.call(this, name, cls, data);
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
