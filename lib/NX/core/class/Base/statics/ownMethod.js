/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var T_NX = require('../../../../core');
var flexSetter = require('../../../lang/Function').flexSetter;

// }}}
// {{{ NX.Base.ownMethod

var $METHOD = module.exports = flexSetter(function(name, fn) {

    var originalFn, className;

    if(fn === T_NX.emptyFn) {
        this.prototype[name] = fn;
        return;
    }

    if(fn.$isOwned) {
        originalFn = fn;

        fn = function() {
            return originalFn.apply(this, arguments);
        };
    }

    className = T_NX.getClassName(this);

    if(className) {
        fn.displayName = className + '#' + name;
    }

    fn.$owner = this;
    fn.$name = name;
    fn.$isOwned = true;

    this.prototype[name] = fn;

});

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
