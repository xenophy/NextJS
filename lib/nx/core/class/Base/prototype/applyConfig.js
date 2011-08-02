/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.Base.prototype.applyConfig

module.exports = NX.Function.flexSetter(function(name, value) {

    var setter = 'set' + NX.String.capitalize(name);

    if (typeof this[setter] === 'function') {
        this[setter].call(this, value);
    }

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
