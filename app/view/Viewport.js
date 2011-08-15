/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS Documentation
 *
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ Docs.view.Viewport

Ext.define('Docs.view.Viewport', {

    // {{{ exntend

    extend: 'Ext.container.Viewport',

    // }}}
    // {{{ requires

    requires: [
        'Docs.view.cls.Container',
        'Docs.view.index.Container',
        'Docs.view.tree.Tree',
        'Docs.History'
    ],

    // }}}
    // {{{ id

    id: 'viewport',

    // }}}
    // {{{ layout

    layout: 'border',

    // }}}
    // {{{ defaults

    defaults: { xtype: 'container' },

    // }}}
    // {{{ initComponent

    initComponent: function() {

        this.items = [

            // This is the 'live docs' header that should appear in the distributed version of the docs
            // {
            //     region: 'north',
            //     layout: 'fit',
            //     cls: 'notice',
            //     html: 'For up to date documentation and features, visit <a href="http://docs.sencha.com/ext-js/4-0">http://docs.sencha.com/ext-js/4-0</a>',
            //     height: 33
            // },

            {
                region:'west',
                width: 240,
                id: 'west-region-container',
                padding: '5 0 20 20',
                layout: 'vbox',
                defaults: {
                    xtype: 'container',
                    width: "100%"
                },
                items: [
                    {
                        xtype: 'button',
                        cls: 'logo',
                        height: 60,
                        margin: '0 0 10 0',
                        width: 220,
                        border: 0,
                        ui: 'hmm',
                        listeners: {
                            click: function() {
                                Ext.getCmp('container').layout.setActiveItem(0);
                                Docs.History.push("");
                            }
                        }
                    },
                    {
                        cls: 'search',
                        id: 'search-container',
                        height: 40,
                        items: [
                            {
                                xtype: 'triggerfield',
                                triggerCls: 'reset',
                                emptyText: '検索',
                                id: 'search-field',
                                enableKeyEvents: true,
                                hideTrigger: true,
                                onTriggerClick: function() {
                                    this.reset();
                                    this.focus();
                                    this.setHideTrigger(true);
                                    Ext.getCmp('search-dropdown').hide();
                                }
                            },
                            {
                                xtype: 'searchdropdown'
                            }
                        ]
                    },
                    {
                        flex: 1,
                        xtype: 'classtree',
                        root: Docs.classData
                    }
                ]
            },
            {
                region: 'center',
                id: 'center-container',
                layout: 'fit',
                minWidth: 800,
                items: {
                    id: 'container',
                    xtype: 'container',
                    layout: 'card',
                    padding: '20',
                    cls: 'container',
                    items: [
                        {
                            autoScroll: true,
                            xtype: 'indexcontainer',
                            classData: Docs.overviewData
                        },
                        {
                            xtype: 'classcontainer'
                        },
                        {
                            autoScroll: true,
                            xtype: 'container',
                            id: 'guide'
                        }
                    ]
                }
            }
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
 *
 */
