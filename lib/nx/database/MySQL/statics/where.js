/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.database.MySQL.statics.where

module.exports = function(cond) {

    var me = this,
        sql = '';

    if(NX.isObject(cond)) {

        sql += 'WHERE ';

        var i = 0;
        var sp = '';
        var op = ' = ';

        NX.iterate(cond, function(key, value) {

            if(i > 0) {

                sp = ' AND ';

            }

            sql += sp;

            sql += key + op + value;

        });

    }

    return sql;
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
