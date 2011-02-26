/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.AbstractManager.create

var $METHOD = module.exports = function(config, defaultType) {

    var type = config[this.typeName] || config.type || defaultType, Constructor = this.types[type];

    if(Constructor == undefined) {
        throw new Error("The '" + type + "' type has not been registered with this manager");
    }

    return new Constructor(config);
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
