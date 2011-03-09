/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var T_Object = require('../../lang/Object');

// }}}
// {{{ NX.Base.initConfig

var $METHOD = module.exports = function(config) {

    var me = this;

    if(!me.$configInited) {

        me.config = T_Object.merge({}, me.config || {}, config || {});
        me.applyConfig(me.config);
        me.$configInited = true;
    }

    return this;
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
