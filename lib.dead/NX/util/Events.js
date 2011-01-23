/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

var NX = require('../NX.js');

// }}}
// {{{ namespace

NX.ns('NX.util');

// }}}

/**
 * @class NX.util.Events
 */
exports = module.exports = NX.extend(require('events').EventEmitter, {

    // {{{ constructor

    /**
     * コンストラクタ
     */
    constructor: function(config) {

        var me = this;

        // 設定適用
        NX.apply(me, config);

        // リスナー設定
        if(NX.isObject(config.listeners)) {
            NX.iterate(config.listeners, function(evname, fn) {
                me.on(evname, fn);
            });
        }

        // スーパークラスメソッドコール
        exports.superclass.constructor.apply(me, arguments);
    }

    // }}}

});

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
