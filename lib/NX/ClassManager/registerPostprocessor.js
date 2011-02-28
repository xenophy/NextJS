/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var T_Function = require('../Function');

// }}}
// {{{ NX.ClassManager.instantiate

var $METHOD = module.exports = T_Function.flexSetter(function(name, fn) {
    this.postprocessors[name] = fn;
    return this;
});

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
