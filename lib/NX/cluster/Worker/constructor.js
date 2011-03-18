/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.server.Worker.constructor

var $METHOD = module.exports = function(master) {

    var me = this;

    NX.apply(me, {

        // マスタープロセス
        master: master,

        // HTTP/HTTPSサーバーオブジェクト
        server: master.server

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
