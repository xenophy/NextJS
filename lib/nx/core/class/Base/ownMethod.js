/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.Base.ownMethod

module.exports = function(name, fn) {

    var originalFn;

    if(fn.$owner !== undefined && fn !== NX.emptyFn) {

        originalFn = fn;

        fn = function() {
            return originalFn.apply(this, arguments);
        };
    }

    var className = NX.getClassName(this);

    if(className) {
        fn.displayName = className + '#' + name;
    }

    fn.$owner = this;
    fn.$name = name;

    this.prototype[name] = fn;
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
