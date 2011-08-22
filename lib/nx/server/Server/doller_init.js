/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.server.Server.$init

module.exports = function(config) {

    var me = this;

    // パス関連初期化
    me.$initPath(config);

    // SSL関連設定初期化
    me.$initSSL(config);

    // セッション関連設定初期化
    me.$initSession(config);

    // ログ関連設定初期化
    me.$initLog(config);

    // アクション関連設定初期化
    me.$initAction(config);

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
