/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS Documentation
 *
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ Docs.view.cls.Container

Ext.define('Docs.view.cls.Container', {

    // {{{ exntend

    extend: 'Ext.container.Container',

    // }}}
    // {{{ alias

    alias: 'widget.classcontainer',

    // }}}
    // {{{ requires

    requires: [
        'Docs.view.cls.Header',
        'Docs.view.cls.TabPanel'
    ],

    // }}}
    // {{{ layout

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    // }}}
    // {{{ initComponent

    initComponent: function() {

        this.items = [
            Ext.create('Docs.view.cls.Header'),
            Ext.create('Docs.view.cls.TabPanel', {
                flex: 1
            })
        ];

        this.callParent(arguments);

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
