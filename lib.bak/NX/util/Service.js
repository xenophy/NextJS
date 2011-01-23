/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var connect = require('connect');

// }}}
// {{{ NX.util.Service

NX.util.Service = NX.extend(Object, {

    // {{{ constructor

    /**
     * @method NX.util.Server
     */
    constructor : function(config) {

        var me = this;

        config = config || {};

        // 初期コンフィグをクローン
        me.initialConfig = NX.clone(config);

        // 初期値設定
        NX.applyIf(config, {
            items: []
        });


//        console.log(module.parent.parent);








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
