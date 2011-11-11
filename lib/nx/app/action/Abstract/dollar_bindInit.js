/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.app.action.Abstract.$bindInit

module.exports = function(path, mods) {

    var tmp = [];

    mods.forEach(function(item) {

        var name = item;
        var conn = 'default';

        if(NX.isObject(item)) {
            name = item.name;
            conn = item.conn;
        }

        tmp.push({
            name: name,
            conn: conn,
            path: path + '/' + name + '.js',
            define: null,
            ready: false
        });

    });

    return tmp;

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
