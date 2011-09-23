/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.database.MySQL.insert

module.exports = function(table, o, fn) {

    var me = this,
        i,
        sql = '';


    sql += 'INSERT INTO ' + table;
    sql += '(';

    i = 0;
    NX.iterate(o, function(key) {
        if(i > 0) {
            sql += ', ';
        }
        sql += key;
        i++;
    });

    sql += ') VALUES (';

    i = 0;
    NX.iterate(o, function(key, value) {
        if(i > 0) {
            sql += ', ';
        }
        sql += value;
        i++;
    });

    sql += ')';

    // {{{ インサート

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
