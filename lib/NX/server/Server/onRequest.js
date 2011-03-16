/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var url = require('url');
var path = require('path');

// }}}
// {{{ NX.server.Server.onRequest

var $METHOD = module.exports = function(req, res, server) {

    var me = this;
    var appControllerName = me.getAppControllerName();
    var basename = path.basename(url.parse(req.url, true).pathname);
    var dirname = path.dirname(req.url);
    var actionPath;

    req.path = dirname;

    var actionName = basename || 'index';

    if(req.path == '/' && basename.substr(-1) !== '/') {

        req.path = appControllerName + '.js';

    } else {
        if(basename.substr(-1) === '/') {
            req.path = req.url.substr(0, req.url.length - 1) + '.js';
            actionName = 'index';
        } else {
            req.path = dirname + '.js';
        }
    }

    if(basename.substr(-1) === '/') {
        actionPath = req.url.substr(0, req.url.length - 1);
    } else {
        actionPath = dirname;
    }

    var extPos = actionName.indexOf('.');
    if(extPos > 0) {
        actionName = actionName.substr(0, extPos);
    }

    // アクションパス設定
    me.setActionPath(actionPath);

    // アクション名設定
    me.setActionName(actionName);

    // コントローラーファイルパス設定
    me.setControllerFilePath(path.normalize(me.getControllersPath() + '/' + req.path));

    // ルーティング開始
    NX.Router.draw(NX.WebController, req, res, me);

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
