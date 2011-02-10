/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ find

var find = module.exports = function(me, type, cond, callback) {

    var adapter = me.connection.adapter;

    if(!adapter) {
        callback(null);
        return;
    }

    var fields = cond.fields || [];
    var where = cond.where || '';

    var query = 'SELECT %s FROM %s %s';

    if(type.toLowerCase() === 'first') {
        where += ' LIMIT 1';
    }

    var selectClause = NX.implode(',', fields);

    if(type.toLowerCase() === 'count') {
        selectClause = 'COUNT(*) as cnt';
    }

    query = NX.sprintf(
        query,
        selectClause,
        me.useTable,
        where
    );

    me.query(query, function(err, rs) {

        if(err) {
            throw err;
        }

        if(type.toLowerCase() === 'first') {
            rs = rs[0];
        }

        if(type.toLowerCase() === 'count') {
            rs = rs[0];
            rs = rs.cnt;
        }

        callback(rs);

    });

}

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
