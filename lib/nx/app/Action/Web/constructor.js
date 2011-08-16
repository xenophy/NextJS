/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.app.action.Web.constructor

module.exports = function(config) {

    config = config || {};

    var me = this;

    // スーパークラスコンストラクタ
    me.callParent(arguments);

    NX.apply(this, {
        get: {},
        post: {},
        request: {},
        result: {}
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
