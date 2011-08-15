/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS Documentation
 *
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ Docs.Application

Ext.define('Docs.Application', {

    // {{{ exntend

    extend: 'Ext.app.Application',

    // }}}
    // {{{ name

    name: 'Docs',

    // }}}
    // {{{ requires

    requires: [
        'Docs.Favorites',
        'Docs.History',
        'Docs.Settings'
    ],

    // }}}
    // {{{ controllers

    controllers: [
        'Classes',
        'Search'
    ],

    // }}}
    // {{{ autoCreateViewport

    autoCreateViewport: true,

    // }}}
    // {{{ launch

    launch: function() {

        Docs.App = this;
        Docs.Favorites.init();
        Docs.History.init();
        Docs.Settings.init();

        if(Docs.initEventTracking) {
            Docs.initEventTracking();
        }

        Ext.fly('loading').remove();
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
