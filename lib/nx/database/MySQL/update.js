/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.database.MySQL.update

module.exports = function(table, o, fn) {

    var me = this,
        where = '',
        sql = '';


    sql += 'UPDATE ' + table + ' SET ';

    var i = 0;
    NX.iterate(o, function(key, value) {

        if(key === '$where') {

            where = ' ' + NX.database.MySQL['where'](value);

        } else {

            if(i > 0) {
                sql += ', ';
            }

            sql += key + ' = ' + value;
            i++;
        }

    });

    sql += where;

    // {{{ アップデート

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
