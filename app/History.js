/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS Documentation
 *
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ Docs.History

Ext.define("Docs.History", {

    // {{{ extend

    extend: 'Docs.LocalStore',

    // }}}
    // {{{ storeName

    storeName: 'History',

    // }}}
    // {{{ singleton

    singleton: true,

    // }}}
    // {{{ maxHistoryLength

    maxHistoryLength: 25,

    // }}}
    // {{{ init

    init: function() {

        Ext.util.History.init(function() {
            this.navigate(Ext.util.History.getToken());
        }, this);

        Ext.util.History.on("change", this.navigate, this);

        this.callParent();

    },

    // }}}
    // {{{ navigate

    navigate: function(token) {

        if(this.ignoreChange) {

            this.ignoreChange = false;
            return;

        }

        var url = this.parseToken(token);

        if(url.type === "api") {

            Docs.App.getController('Classes').loadPage(url.key, true);

        } else if (url.type === "pages") {

            Docs.App.getController('Classes').showGuide(url.key, true);

        } else {

            Ext.getCmp('container').layout.setActiveItem(0);

        }

    },

    // }}}
    // {{{ parseToken

    parseToken: function(token) {

        var matches = token && token.match(/\/(api|pages)\/(.*)/);

        return matches ? {type: matches[1], key: matches[2]} : {};

    },

    // }}}
    // {{{ parseClassName

    parseClassName: function(token) {

        var url = this.parseToken(token);

        if(url.type === "api") {

            return url.key.replace(/-.*$/, '');

        } else {

            return false;

        }

    },

    // }}}
    // {{{ push

    push: function(token) {

        this.ignoreChange = true;
        Ext.util.History.add(token);

        var cls = this.parseClassName(token);

        if(cls) {

            var oldIndex = this.store.findExact('cls', cls);

            if(oldIndex > -1) {
                this.store.removeAt(oldIndex);
            }

            this.store.insert(0, {cls: cls});

            while(this.store.getAt(this.maxHistoryLength)) {
                this.store.removeAt(this.maxHistoryLength);
            }

            this.syncStore();
        }

    },

    // }}}
    // {{{ remove

    removeClass: function(cls) {

        var index = this.store.findExact('cls', cls);

        this.store.removeAt(index);
        this.syncStore();

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
