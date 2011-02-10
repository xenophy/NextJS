/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ getQueryLock

var getQueryLock = module.exports = function(me, tables) {

    var sql = 'LOCK TABLES';

    // TODO:tablesが配列内場合は、例外発生

    tables.forEach(function(tbl, i) {

        if(i>0) {
            sql += ',';
        }

        sql += ' ' + tbl + ' WRITE';

    });
    sql += ';';

    return sql;
}

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
