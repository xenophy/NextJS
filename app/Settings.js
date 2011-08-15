/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS Documentation
 *
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ Docs.Settings

Ext.define("Docs.Settings", {

    // {{{ extend

    extend: 'Docs.LocalStore',

    // }}}
    // {{{ storeName

    storeName: 'Settings',

    // }}}
    // {{{ singleton

    singleton: true,

    // }}}
    // {{{ set

    set: function(key, value) {

        var index = this.store.findExact("key", key);

        if(index > -1) {

            this.store.getAt(index).set({key: key, value: value});

        } else {

            this.store.add({key: key, value: value});

        }

        this.syncStore();
    },

    // }}}
    // {{{ get

    get: function(key) {

        var index = this.store.findExact("key", key);

        return index > -1 ? this.store.getAt(index).get("value") : undefined;

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
