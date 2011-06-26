/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.app.Dispatcher

NX.define('NX.app.Dispatcher', {

    // {{{ alternateClassName

    alternateClassName: 'NX.Dispatcher',

    // }}}
    // {{{ dispatch

    dispatch: function(config) {

        var me = this, controller;

        config = config || {};

        NX.apply(config, {

            // {{{ onReady

            onReady: function() {
                controller.execute();
            }

            // }}}

        });

        // コントローラー生成
        controller = new NX.WebController(config);

        // コントローラー初期化
        controller.init();

    }

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
