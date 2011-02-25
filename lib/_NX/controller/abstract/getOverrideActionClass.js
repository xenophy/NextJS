/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var path = require('path');

// }}}
// {{{ getOverrideActionClass

var getOverrideActionClass = module.exports = function(ctrl, actionName) {

    var me = ctrl,
        ret = false;

    try {
        var amp = path.normalize([
            me.controllerPath,
            me.actionPath,
            actionName
        ].join('/'));

        amp += '.action.js';

        // キャッシュクリア
        NX.moduleCacheClear(amp);

        // オーバーライドアクションクラス読み込み
        ret = require(amp);

    } catch(e) {
        return ret;
    }

    return ret;

}

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
