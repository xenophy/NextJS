/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.database.MySQL.connect

module.exports = function(fn) {

    var me = this;

    me.driver.connect(function(err, conn) {

        if(err) {

            // DB接続エラー
            fn();
            return;

        }

        me.driver.query('USE ' + me.database, function(err, results, fields) {

            if(err) {

                // SQLエラー
                fn();
                return;
            }

            fn();
        });

    });

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
