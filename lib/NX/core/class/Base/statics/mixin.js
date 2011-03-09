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
// {{{ NX.Base.mixin

var $METHOD = module.exports = flexSetter(function(name, cls) {

    var mixinPrototype = cls.prototype, myPrototype = this.prototype, i;

    for(i in mixinPrototype) {

        if(mixinPrototype.hasOwnProperty(i)) {

            if(myPrototype[i] === undefined) {

                if(T_NX.isFunction(mixinPrototype[i])) {
                    this.borrowMethod(i, mixinPrototype[i]);
                } else {
                    myPrototype[i] = mixinPrototype[i];
                }

            } else if(i === 'config' && T_NX.isObject(myPrototype[i]) && T_NX.isObject(mixinPrototype[i])) {
                T_NX.Object.merge(myPrototype[i], mixinPrototype[i]);
            }
        }
    }

    if(!myPrototype.mixins) {
        myPrototype.mixins = {};
    }

    myPrototype.mixins[name] = mixinPrototype;

});

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
