/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ getQueryInsert

var getQueryInsert = module.exports = function(me, table, v) {

    var fields = [];
    var values = [];

    NX.iterate(v, function(key, value) {
        fields.push(key);

        if(NX.isString(value)) {
            value = "'" + value + "'";
        }
        values.push(value);
    });

    return NX.sprintf(
        'INSERT INTO %s ( %s ) VALUES ( %s )',
        table,
        NX.implode(',', fields),
        NX.implode(',', values)
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
