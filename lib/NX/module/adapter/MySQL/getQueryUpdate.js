/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ getQueryUpdate

var getQueryUpdate = module.exports = function(me, table, v, where) {

    var set = [];

    // SET句生成
    NX.iterate(v, function(key, value) {
        if(NX.isString(value)) {
            value = "'" + value + "'";
        }
        set.push(key + '=' + value);
    });

    // TODO: WHERE句は、文字列以外に配列でも指定可能なようにする

    where = 'WHERE ' + where;

    return NX.sprintf(
        'UPDATE %s SET %s %s',
        table,
        NX.implode(',', set),
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
