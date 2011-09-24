/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.database.MongoDB.constructor

module.exports = function(config) {

    config = config || {};

    var driver = NX.database.Manager.get(config);

    // {{{ コネクションプーリング

    if(driver === undefined) {

        driver = {
            mongodb: require('mongodb')
        };

        NX.applyIf(config, {
            autoConnect: true,
            host: '127.0.0.1',
            port: driver.mongodb.Connection.DEFAULT_PORT
        });

        driver.server = new driver.mongodb.Server(config.host, config.port, {});

        NX.database.Manager.set(config, driver);

    }

    // }}}

    NX.apply(this, config);
    NX.applyIf(this, {
        driver: driver
    });

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
