/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.app.module.Module.constructor

module.exports = function(config) {

    config = config || {};

    NX.apply(this, config);
    NX.applyIf(this, {
        useTable: null,
        autoConnect: true
    });

    // スーパークラスメソッドコール
    this.callParent(arguments);

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
