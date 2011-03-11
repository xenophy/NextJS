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

var $METHOD = module.exports = function(req, res, server) {

    var controllerFilePath = server.getControllerFilePath();

    // コントローラークラスファイル存在確認
    path.exists(controllerFilePath, function(exists) {

        var o = {
            config: {
                request: req,
                response: res,
                server: server
            }
        };

        if(exists) {

//            require();


        }

        // コントローラー登録
        NX.regController(controllerFilePath, o);

    });


        // ルーティング
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>Hello, World!</h1>');
        res.end();





};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
