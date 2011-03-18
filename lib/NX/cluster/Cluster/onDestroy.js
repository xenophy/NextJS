/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.server.Cluster.onDestroy

var $METHOD = module.exports = function() {

    var me = this;

    // ステータス設定
    me.state = NX.Cluster.states.HARD_SHUTDOWN;

    // イベント発火
    me.fireEvent('closing', me);

    // キル
    me.kill(NX.Cluster.signs.KILL);

    // 破棄
    me.destroy();

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
