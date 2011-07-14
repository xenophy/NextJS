/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.app.AbstractController.execute

module.exports = function(req, res, next) {

    var me = this;
    var idx = 0;

    // アクションチェーン実行
    function actionchain(err) {

        var action = me.actionChain[idx++];

        if(action) {

            req.controller = me;

            try {

                action(req, res, actionchain);

            } catch(e) {

                // {{{ 500エラー

                res.$errorCode = 500;

                // 次へ
                next();

                //                        console.log("====");

                //                        console.log(e.stack);
//                res.writeHead(200);
//                res.end("teston");

                // }}}

            }

        } else {

            // 次へ
            next();

        }
   }
   actionchain();

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
