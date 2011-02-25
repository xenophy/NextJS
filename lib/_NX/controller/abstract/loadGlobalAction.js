/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var path = require('path');

// }}}
// {{{ loadGlobalAction

var loadGlobalAction = module.exports = function(ctrl) {

    var me = ctrl,
        ret = false;

    try {
        var file = path.normalize(me.controllerPath + '/app.globalaction.js');

        // キャッシュクリア
        NX.moduleCacheClear(file);

        // オーバーライドアクションクラス読み込み
        ret = require(file);

        if(!NX.isArray(ret)) {
            var cls = ret;
            var action = new cls();

            ret = [action];
        } else {

            // アクションチェーン形式で指定された場合

            ret.forEach(function(name, i) {

                file = path.normalize(me.actionsPath + '/' + name + '.action.js');

                // キャッシュクリア
                NX.moduleCacheClear(file);

                var cls = require(file);

                ret[i] = new cls();

            });

        }

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
