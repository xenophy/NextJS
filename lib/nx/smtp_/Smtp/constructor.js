/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.smtp.Smtp.constructor

module.exports = function(config) {

    config = config || {};

    NX.apply(this, config);
    NX.applyIf(this, {
        state       : NX.smtp.Smtp.NOTCONNECTED,
        loggedin    : (config.user && config.password) ? false : true,
        sock        : null,
        timeout     : 5000,
        domain      : NX.Os.hostname(),
        host        : '127.0.0.1',
        ssl         : false,
        tls         : false,
        port        : 25,
        ssl_port    : 465,
        tls_port    : 587
    });

    if(this.ssl === true) {
        this.port = 465;
    } else if(this.tls === true) {
        this.port = 587;
    }

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
