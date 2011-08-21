/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.app.controller.Abstract.execute

module.exports = function(req, res, next) {

    var me = this;
    var idx = 0;

    // アクションチェーン実行
    function actionchain(err) {

        var action;

        if(me.actionChain) {
            action = me.actionChain[idx++];
        }

        if(action) {

            req.controller = me;

            try {

                NX.currentRequest = req;
                NX.currentResponse = res;

                action(req, res, actionchain);

            } catch(e) {

                // {{{ 500エラー

                res.$errorCode = 500;
                res.$errorDetails = {
                    msg: e.message,
                    stack: e.stack
                };

                // 次へ
                next();

                // }}}

            }

        } else {

//            res.progressAction = false;

            // 次へ
            next();

        }
   }

//   res.progressAction = true;
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
