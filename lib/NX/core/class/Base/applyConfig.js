/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var T_String = require('../../lang/String');
var flexSetter = require('../../lang/Function').flexSetter;

// }}}
// {{{ NX.Base.applyConfig

var $METHOD = module.exports = flexSetter(function(name, value) {

    var me = this;

    var setter = 'set' + T_String.capitalize(name);

    if(typeof me[setter] === 'function') {
        me[setter].call(me, value);
    }

    return me;
});

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
