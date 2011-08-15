/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS Documentation
 *
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ Docs.localStorage

Ext.define("Docs.LocalStore", {

    // {{{ storeName

    storeName: '',

    // }}}
    // {{{ init

    init: function() {

        this.localStorage = ('localStorage' in window && window['localStorage'] !== null);
        this.store = Ext.getStore(this.storeName);
        this.localStorage && this.store.load();

    },

    // }}}
    // {{{ syncStore

    syncStore: function() {

        this.localStorage && this.store.sync();

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
