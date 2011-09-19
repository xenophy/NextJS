/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.database.MySQL.statics.select

module.exports = function(table, fields, cond) {

    var me = this,
        tpl = '',
        sql = '';

    tpl += ' SELECT ';

    if(!cond) {

        /*
        // {{{ 取得フィールド作成

        var i = 0;
        NX.iterate(fields, function(key, value) {

            if(i > 0) {
                tpl += ', ';
            }

            tpl += key;
            i++;
        });

        // }}}
        */

        tpl += '*';


    }

    tpl += ' FROM ' + table + ' ';

    if(!cond) {

        // {{{ WHERE句生成

        tpl += NX.database.MySQL['where'](fields);

        // }}}

    }

    sql = tpl;

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
