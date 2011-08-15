/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS Documentation
 *
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ Docs.Favorites

Ext.define("Docs.Favorites", {

    // {{{ extend

    extend: 'Docs.LocalStore',

    // }}}
    // {{{ storeName

    storeName: 'Favorites',

    // }}}
    // {{{ singleton

    singleton: true,

    // }}}
    // {{{ setTree

    setTree: function(tree) {
        this.tree = tree;
    },

    // }}}
    // {{{ add

    add: function(cls) {

        if(!this.has(cls)) {

            this.store.add({cls: cls});
            this.syncStore();
            this.tree.setFavorite(cls, true);

        }

    },

    // }}}
    // {{{ remove

    remove: function(cls) {

        if(this.has(cls)) {

            this.store.removeAt(this.store.findExact('cls', cls));
            this.syncStore();
            this.tree.setFavorite(cls, false);

        }

    },

    // }}}
    // {{{ has

    has: function(cls) {

        return this.store.findExact('cls', cls) > -1;

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
