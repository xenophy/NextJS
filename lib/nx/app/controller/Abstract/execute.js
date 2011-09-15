/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.app.controller.Abstract.execute

module.exports = function(req, res, next) {

    var me = this,
        idx = 0;

    next = NX.Function.createSequence(function() {
    }, next);

    // }}}
    // {{{ アクションチェーン実行

    function actionchain(rc) {

        var action;

        rc = rc || {abort: false};

        if(me.actionChain) {
            action = me.actionChain[idx++];
        }

        if(action && rc.abort === false) {

            req.controller = me;

            try {

                NX.currentRequest = req;
                NX.currentResponse = res;

                // アクションタイムアウト設定
                var timer = setTimeout(function() {

                    // {{{ 500エラー

                    res.$errorCode = 500;
                    res.$errorDetails = {
                        msg: "This Action is too long execute.",
                        stack: "This Action is too long execute.\nPlease call it if you have forgotten the call of 'this.exit'. "
                    };

                    // 次へ
                    next(rc);

                    // }}}

                }, res.actionTimeout || 3000);

                action(req, res, function(rrc) {

                    NX.apply(rc, rrc);

                    actionchain(rc);
                    clearTimeout(timer);
                });

            } catch(e) {

                // {{{ 500エラー

                res.$errorCode = 500;
                res.$errorDetails = {
                    msg: e.message,
                    stack: e.stack
                };

                // 次へ
                next(rc);

                // }}}

            }

        } else {

            // 次へ
            next(rc);

        }
   }

   actionchain();

   // }}}

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
