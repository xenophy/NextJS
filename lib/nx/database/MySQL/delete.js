/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.database.MySQL.delete

module.exports = function(table, o, fn) {

    var me = this,
        where = '',
        sql = '';


    sql += 'DELETE FROM ' + table;

    where = ' ' + NX.database.MySQL['where'](o);

    sql += where;

    // {{{ delete

    me.driver.query(sql, function(err) {
        fn(err);
    });

    // }}}

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
