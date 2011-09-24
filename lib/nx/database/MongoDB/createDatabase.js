/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.database.MongoDB.createDatabase

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

        (function(callback) {

            var QueryCommand = require('mongodb').QueryCommand,
                DbCommand = require('mongodb').DbCommand,
                Db = require('mongodb').Db;

            var command;
            var selector = {
                'dbstats': this.collectionName
            };

            callback = callback || function(err, docs) {};

            command = new DbCommand(
                this,
                this.databaseName + '.' + DbCommand.SYSTEM_COMMAND_COLLECTION,
                QueryCommand.OPTS_NO_CURSOR_TIMEOUT,
                0,
                -1,
                selector,
                null
            );

            this.executeCommand(command, function(err, result) {

                if(err == null && result.documents[0].ok == 1) {
                    callback(null, result.documents[0].results);
                } else  {
                    err != null ? callback(err, null) : callback(new Error(result.documents[0].errmsg), null);
                }

            });

        }).call(db, function() {
            fn();
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
