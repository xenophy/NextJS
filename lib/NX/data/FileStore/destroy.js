/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.data.FileStore.destroy

module.exports = function(sid, fn) {

    var me = this;

    process.nextTick(function(){

        // TODO: バグッテマス・・ファイル消さないと意味ない
        delete me.sessions[sid];

        fn && fn();

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
