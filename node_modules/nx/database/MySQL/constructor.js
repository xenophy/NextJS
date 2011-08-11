/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.database.MySQL.constructor

module.exports = function(config) {

    config = config || {};

    var Client = require('mysql').Client;

    NX.apply(this, config);
    NX.applyIf(this, {
        driver: new Client()
    });

    var driver = this.driver;

    NX.apply(driver, {
        user: config.user,
        password: config.password
    });

    if(config.host) {
        driver.host = config.host;
    }

    if(config.port) {
        driver.port = config.port;
    }

    // スーパークラスメソッドコール
    this.callParent(arguments);

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
