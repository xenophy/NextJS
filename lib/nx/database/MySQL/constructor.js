/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.database.MySQL.constructor

module.exports = function(config) {

    config = config || {};

    var driver = NX.database.Manager.get(config);

    // {{{ コネクションプーリング

    if(driver === undefined) {

        driver = require('mysql').createClient(config);

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
