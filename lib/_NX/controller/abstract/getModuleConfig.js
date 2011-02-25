/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var path = require('path');

// }}}
// {{{ getModuleConfig

var getModuleConfig = module.exports = function(ctrl, name) {

    var me = ctrl,
        connName = 'default';

    if(NX.isObject(name)) {
        connName = name.connection || 'default';
        name = name.name;
    }

    return {
        name: name,
        connName: connName
    };

}

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
