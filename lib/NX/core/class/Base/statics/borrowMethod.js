/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var flexSetter = require('../../../lang/Function').flexSetter;

// }}}
// {{{ NX.Base.borrowMethod

var $METHOD = module.exports = flexSetter(function(name, fn) {

    if(!fn.$isOwned) {
        this.ownMethod(name, fn);
    } else {
        this.prototype[name] = fn;
    }
});

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
