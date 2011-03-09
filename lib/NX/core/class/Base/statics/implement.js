/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var T_NX = require('../../../../core');
var T_Object = require('../../../lang/Object');
var flexSetter = require('../../../lang/Function').flexSetter;

// }}}
// {{{ NX.Base.implement

var $METHOD = module.exports = flexSetter(function(name, value) {

    if(T_NX.isObject(this.prototype[name]) && T_NX.isObject(value)) {
        T_Object.merge(this.prototype[name], value);
    } else if (T_NX.isFunction(value)) {
        this.ownMethod(name, value);
    } else {
        this.prototype[name] = value;
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
