/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.server.Server.$initAction

module.exports = function(config) {

    var me = this;

    NX.applyIf(config, {
        action: {}
    });

    NX.applyIf(config.action, {
        allowExt: ['html', 'htm', 'js', 'json']
    });

    NX.applyIf(config.action, {
        timeout: 3000
    });

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
