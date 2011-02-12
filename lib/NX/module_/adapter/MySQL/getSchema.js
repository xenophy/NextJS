/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ getSchema

var getSchema = module.exports = function(me, table, callback) {

    var sql = NX.sprintf('SHOW FULL COLUMNS FROM %s;', table);

    me.query(sql, function(err, rs) {

        if(err) {
            throw err;
        }

        var ret = [];
        rs.forEach(function(r) {
            ret.push({
                'field'     : r.Field,
                'type'      : r.Type,
                'key'       : r.Key,
                'default'   : r.Default,
                'extra'     : r.Extra,
                'comment'   : r.Comment
            });
        });

        callback({
            query: sql,
            result: ret
        });
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
