/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ getQueryDelete

var getQueryDelete = module.exports = function(me, table, where) {

    // TODO: WHERE句は、文字列以外に配列でも指定可能なようにする
    where = 'WHERE ' + where;

    return NX.sprintf(
        'DELETE FROM %s %s',
        table,
        where
    );
}

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
