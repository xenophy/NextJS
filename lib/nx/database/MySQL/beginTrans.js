/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.database.MySQL.beginTrans

module.exports = function(fn) {

    var me = this,
        sql = '';

    // {{{ トランザクション開始

    me.driver.query('set autocommit = 0', function(err) {
        me.driver.query('begin', function(err) {
            fn();
        });
    });

    // }}}

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
