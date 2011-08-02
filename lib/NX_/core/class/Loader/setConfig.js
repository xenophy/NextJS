/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.Loader.setConfig

module.exports = function(name, value) {

    if(NX.isObject(name) && arguments.length === 1) {

        NX.Object.merge(this.config, name);

    } else {

        this.config[name] = (NX.isObject(value)) ? NX.Object.merge(this.config[name], value) : value;

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
