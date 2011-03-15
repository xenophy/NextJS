/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var path = require('path');

// }}}
// {{{ NX.controller.ControllerManager

/**
 * @class NX.controller.ControllerManager
 */
NX.define('NX.controller.ControllerManager', {

    // {{{ extend

    /**
     * @prop extend
     */
    extend: 'NX.AbstractManager',

    // }}}
    // {{{ singleton

    /**
     * @prop singleton
     */
    singleton: true,

    // }}}
    // {{{ register

    /**
     * @method register
     */
    register: require('./register')

    // }}}

}, function() {

    // {{{ regController

    /**
     * @method regController
     */
    NX.regController = function(controllerFilePath, o, cb) {

        var ret, mgr = NX.controller.ControllerManager;

        // 該当パスのコントローラー読み込み済確認
        var registered = mgr.all.containsKey(controllerFilePath);

        // コントローラークラスファイル存在確認
        path.exists(controllerFilePath, function(exists) {

            if(exists) {

                // ファイル更新日時確認

                // ユーザーコントローラー定義読み込み
                //            require();


            } else {

                // コントローラーが未登録の場合のみ登録を行う
                if(!registered) {
                    ret = mgr.register.apply(mgr, [controllerFilePath, o]);
                } else {
                    ret = mgr.get(controllerFilePath);
                }

            }

            if(NX.isFunction(cb)) {
                /*
                ret.on('ready', function() {
                    cb(ret);
                });
                */
            }

            var res = ret.response;

            console.log(ret.response);

        // ルーティング
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>Hello, World!' + (new Date()).getSeconds() + '</h1>');
        console.log("kaeshiteru?");
        res.end();

        console.log("-------------");


            ret.init();

        });

    };

    // }}}

});

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
