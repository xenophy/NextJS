/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.app.controller.Web.render

module.exports = function(req, res, next) {

    var me = this;

    // ビューレンダリング
    var view = NX.create('NX.WebView', req.controller.paths, req, res);

    view.init(req, res, function() {

        var f = view.render;

        // 実行メソッド切り替え
        if(NX.isNumber(res.$errorCode)) {
            f = view.error;
        }

        // ビュー実行
        f.call(view, req, res, function() {

            me.superclass.render.call(me, req, res, next);

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
