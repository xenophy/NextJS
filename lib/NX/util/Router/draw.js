/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var path = require('path');

// }}}
// {{{ NX.util.Router.draw

var $METHOD = module.exports = function(controllerCls, req, res, server) {

    var controllerFilePath = server.getControllerFilePath();

    // コントローラーファイル存在確認
    path.exists(controllerFilePath, function(exists) {

        var cc = {};

        if(exists) {

        }

        // コントローラクラス生成
        var controller = new controllerCls(cc);

        // コントローラー初期化
        controller.init({

            // リスナー設定
            listeners : {

                // {{{ ready

                ready: function(controller) {

                    // ルーティング
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.write('<h1>Hello, World!</h1>');
                    res.end();

                }

                // }}}

            }

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
