/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.database.MongoDB.remove

module.exports = function(table, args) {

    var me = this,
        driver = me.conn.driver,
        mongodb = driver.mongodb,
        client = driver.client;

    var collection = new mongodb.Collection(client, table);

    return collection.findAndModify(args['0'], [['_id','asc']], {}, {remove:true}, args['1']);
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
