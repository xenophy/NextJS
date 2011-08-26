/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.app.Dispatcher.dispatch

module.exports = function() {

    return function(req, res, next) {

        var config = req.config;

        // コントローラー読み込み
        NX.require('NX.app.controller.' + config.controllerType);

        // コントローラー生成
        var controller = NX.create('NX.app.controller.' + config.controllerType, config);

        // リクエストオブジェクトにコントローラー設定
        req.controller = controller;

        // コントローラー初期化
        controller.init(req, res, function() {

            // アクション実行
            controller.execute(req, res, function(rc) {

                res.actionReturnConfig = rc;

                // 処理結果レンダリング
                controller.render(req, res, next);

            });

        });

    }

};


// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
