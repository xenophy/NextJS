/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.Module

/**
 * @class NX.Module
 */
NX.Module = NX.extend(NX.module.AbstractModule, {

    // {{{ constructor

    /**
     * @method Module
     */
    constructor : function(config) {

        var me = this;

        // スーパークラスメソッドコール
        NX.Module.superclass.constructor.apply(me, arguments);
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
