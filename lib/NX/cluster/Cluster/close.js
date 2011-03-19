/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.server.Cluster.close

var $METHOD = module.exports = function() {

    var me = this;

    NX.apply(me, {
        state: NX.Cluster.states.GRACEFUL_SHUTDONW,
    });

    // イベント発火
    me.fireEvent('closing', me);

    // キル
    me.kill(NX.Cluster.signs.SIGQUIT);

    me.pendingDeaths = me.children.length;

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
