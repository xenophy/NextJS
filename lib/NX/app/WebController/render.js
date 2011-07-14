/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.app.WebController.render

module.exports = function(req, res, next) {

    // ビューレンダリング
    var view = NX.create('NX.WebView', req.controller.paths, req, res);

    view.init(req, res, function() {

        if(NX.isNumber(res.$errorCode)) {

            view.error(res.$errorCode, function() {

                // 次へ
                next();

            });

        } else {

            view.render(req, res, function() {

                // 次へ
                next();

            });

        }

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
