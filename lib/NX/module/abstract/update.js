/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ update

var update = module.exports = function(me, v, where, callback) {

    var adapter = me.connection.adapter;

    if(!adapter) {
        callback(null);
        return;
    }

    var query = adapter.getQueryUpdate(me.useTable, v, where);

    me.query(query, function(err, info) {

        if(err) {
            throw err;
        }

        callback(info);
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
