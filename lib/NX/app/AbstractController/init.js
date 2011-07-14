/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.app.AbstractController.init

module.exports = function(req, res, next) {

    var me = this,
        paths = me.paths;

    // データーベース設定初期化
    me.initDatabaseConfig(req, res, function() {

        // アクション初期化
        me.initAction(req, res, function() {

            me.execute(req, res, function() {

                me.render(req, res, next);
            });

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
