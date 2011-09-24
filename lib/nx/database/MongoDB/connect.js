/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.database.MongoDB.connect

module.exports = function(fn) {

    var me = this,
        driver = me.driver,
        mongodb = me.driver.mongodb,
        server = me.driver.server,
        database = me.database;

    new mongodb.Db(database, server, {}).open(function (err, client) {

        if(err) {
            throw err;
        }

        driver.client = client;

        fn();

    });

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
