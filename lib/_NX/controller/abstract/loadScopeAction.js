/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var path = require('path');

// }}}
// {{{ loadScopeAction

var loadScopeAction = module.exports = function(ctrl) {

    var me = ctrl,
        ret = false;

    try {

        // ルートに上っていくように繰り返しスキャンする
        var dirs = me.actionPath.split('/');
        var cls = null;
        while(dirs.length > 0) {

            var dir = path.normalize(me.controllerPath + '/' + NX.implode('/', dirs) + '/');
            var file = dir + 'app.scopeaction.js';

            try{

                // キャッシュクリア
                NX.moduleCacheClear(file);

                var cls = require(file);

            } catch(e) {}

            if(!NX.isNull(cls)) {
                break;
            }

            dirs.pop();
        }

        if(!NX.isArray(cls)) {
            var action = new cls();
            ret = [action];
        } else {

            ret = cls;
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
