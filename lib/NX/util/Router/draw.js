/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.util.Router.draw

var $METHOD = module.exports = function(req, res, server) {

    var controllerFilePath = server.getControllerFilePath();

    // コントローラー登録
    NX.regController(controllerFilePath, {

        // リクエストオブジェクト
        request: req,

        // レスポンスオブジェクト
        response: res,

        // サーバーオブジェクト
        server: server

        /*
        // リスナー設定
        listeners: {

            // {{{ ready

            ready: function(controller) {

                console.log(controller.server.getActionName());

        // ルーティング
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>Hello, World!' + (new Date()).getSeconds() + '</h1>');
        console.log("kaeshiteru?");
        res.end();

        console.log("-------------");


            }

            // }}}

        }
        */

    });


    /*
        // ルーティング
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>Hello, World!' + (new Date()).getSeconds() + '</h1>');
        console.log("kaeshiteru?");
        res.end();

        console.log("-------------");
        */


};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
