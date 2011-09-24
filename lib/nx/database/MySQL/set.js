/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.database.MySQL.set

module.exports = function(table, o, fn) {

    var me = this,
        where = '',
        sql = '';

        /*
        REPLACE INTO tbl_CustomerB (UserID, FirstName, LastName, Sex, Age) Enter
    -> VALUES ('P005','花子','日本','f',15); Enter

        console.log(o);
        */

    sql += 'REPLACE INTO ' + table;
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

        if(NX.isString(value)) {
            value = '"' + value + '"';
        }

        sql += value;
        i++;
    });

    sql += ')';
    console.log(sql);

    // {{{ replace into

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
