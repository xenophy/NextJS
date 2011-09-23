/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ parseOperator

parseOperator = function(key) {

    var op;

    if(key == '$ne') {
        op = ' <> ';
    } else if(key == '$lt') {
        op = ' < ';
    } else if(key == '$lte') {
        op = ' <= ';
    } else if(key == '$gt') {
        op = ' > ';
    } else if(key == '$gte') {
        op = ' >= ';
    } else {
        op = ' = ';
    }

    return op;
};

// }}}
// {{{ NX.database.MySQL.statics.where

module.exports = function(cond) {

    var me = this,
        sql = '';

    if(NX.isObject(cond)) {

        var limit = '';
        var i = 0;
        var sp = '';
        var op = ' = ';

        NX.iterate(cond, function(key, value) {

            if(i > 0) {
                sp = ' AND ';
            }

            sql += sp;

            if(NX.isObject(value)) {

                var tmpsql = '';
                var j = 0;

                NX.iterate(value, function(opkey, opval) {

                    if(j > 0) {
                        tmpsql += ' AND ';
                    }

                    op = parseOperator(opkey);
                    value = opval;

                    if(NX.isString(value)) {
                        value = '"' + value + '"';
                    }

                    tmpsql += key + op + value;

                    j++;
                });

                if(j > 1) {
                    tmpsql = '(' + tmpsql + ')';
                }

                if(i === 0) {
                    sql += 'WHERE ';
                }

                sql += tmpsql;

            } else {

                // {{{ 文字列の場合はSQLにダブルクォーテーションを付加

                if(NX.isString(value)) {
                    value = '"' + value + '"';
                }

                // }}}

                if(key === '$limit') {

                    if(NX.isArray(value)) {
                        value = value.join(', ');
                    }

                    limit = ' LIMIT ' + value;

                } else {

                    if(i === 0) {
                        sql += 'WHERE ';
                    }
                    sql += key + op + value;

                }

            }

            i++;
        });

        sql += limit;

    } else if(NX.isString(cond)) {

        // {{{ 文字列が直接指定された場合は、WHERE句としてそのまま扱う

        sql += 'WHERE ';
        sql += cond;

        // }}}

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
