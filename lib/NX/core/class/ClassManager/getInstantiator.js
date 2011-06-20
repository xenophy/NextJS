/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.ClassManager.getInstantiator

module.exports = function(length) {

    if(!this.instantiators[length]) {

        var i = length, args = [];

        for(i = 0; i < length; i++) {
            args.push('a['+i+']');
        }

        this.instantiators[length] = new Function('c', 'a', 'return new c('+args.join(',')+')');
    }

    return this.instantiators[length];
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
