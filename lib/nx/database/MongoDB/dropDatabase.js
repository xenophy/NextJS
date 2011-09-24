/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.database.MongoDB.dropDatabase

module.exports = function(dbname, fn) {

    var me = this,
        driver = me.conn.driver,
        mongodb = driver.mongodb,
        server = driver.server;

    var db = new mongodb.Db(dbname, server, {});
    db.open(function (err, client) {

        if(err) {
            throw err;
        }

        client.dropDatabase(function(err, result) {
            fn(err, result);
        });

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
