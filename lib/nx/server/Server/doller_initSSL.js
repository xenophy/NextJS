/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.server.Server.$initSSL

module.exports = function(config) {

    var me = this;

    if(!NX.isObject(config.ssl)) {
        config.ssl = false;
    } else {
        NX.applyIf(config.ssl, {
            host: '0.0.0.0'
        });
    }

    return config;

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
