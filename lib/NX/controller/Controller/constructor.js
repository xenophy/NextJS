/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.controller.Controller.constructor

var $METHOD = module.exports = function(config) {

    var me = this;

    // 設定適用
    NX.apply(me, config);

    // コンフィグ初期化
    me.initConfig({});

    // イベント定義
    me.addEvents(

        // {{{ ready

        /**
         * @event ready
         */
        'ready'

        // }}}

    );

    // ディスパッチャー生成



    // スーパークラスメソッドコール
    me.callParent();

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
