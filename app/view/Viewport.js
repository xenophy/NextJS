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

        this.items = [{

            // {{{ region

            region:'west',

            // }}}
            // {{{ width

            width: 240,

            // }}}
            // {{{ id

            id: 'west-region-container',

            // }}}
            // {{{ padding

            padding: '5 0 20 20',

            // }}}
            // {{{ layout

            layout: 'vbox',

            // }}}
            // {{{ defaults

            defaults: {

                // {{{ xtype

                xtype: 'container',

                // }}}
                // {{{ width

                width: "100%"

                // }}}

            },

                // }}}
                // {{{ items

                items: [{

                    // {{{ xtype

                    xtype: 'button',

                    // }}}
                    // {{{ cls

                    cls: 'logo',

                    // }}}
                    // {{{ height

                    height: 60,

                    // }}}
                    // {{{ margin

                    margin: '0 0 10 0',

                    // }}}
                    // {{{ width

                    width: 220,

                    // }}}
                    // {{{ border

                    border: 0,

                    // }}}
                    // {{{ ui

                    ui: 'hmm',

                    // }}}
                    // {{{ listeners

                    listeners: {

                        // {{{ click

                        click: function() {

                            Ext.getCmp('container').layout.setActiveItem(0);
                            Docs.History.push("");
                        }

                        // }}}

                    }

                    // }}}

                }, {

                    // {{{ cls

                    cls: 'search',

                    // }}}
                    // {{{ search-container

                    id: 'search-container',

                    // }}}
                    // {{{ height

                    height: 40,

                    // }}}
                    // {{{ items

                    items: [{

                        // {{{ xtype

                        xtype: 'triggerfield',

                        // }}}
                        // {{{ triggerCls

                        triggerCls: 'reset',

                        // }}}
                        // {{{ emptyText

                        emptyText: '検索',

                        // }}}
                        // {{{ id

                        id: 'search-field',

                        // }}}
                        // {{{ enableKeyEvents

                        enableKeyEvents: true,

                        // }}}
                        // {{{ hideTrigger

                        hideTrigger: true,

                        // }}}
                        // {{{ onTriggerClick

                        onTriggerClick: function() {

                            this.reset();
                            this.focus();
                            this.setHideTrigger(true);
                            Ext.getCmp('search-dropdown').hide();
                        }

                        // }}}

                    },{

                        // {{{ xtype

                        xtype: 'searchdropdown'

                        // }}}

                    }

                    // }}}

                ]

                // }}}

            },{

                // {{{ flex

                flex: 1,

                // }}}
                // {{{ xtype

                xtype: 'classtree',

                // }}}
                // {{{ root

                root: Docs.classData

                // }}}

            }]

            // }}}

        },{

            // {{{ region

            region: 'center',

            // }}}
            // {{{ id

            id: 'center-container',

            // }}}
            // {{{ layout

            layout: 'fit',

            // }}}
            // {{{ minWidth

            minWidth: 800,

            // }}}
            // {{{ items

            items: {

                // {{{ id

                id: 'container',

                // }}}
                // {{{ xtype

                xtype: 'container',

                // }}}
                // {{{ layout

                layout: 'card',

                // }}}
                // {{{ padding

                padding: '20',

                // }}}
                // {{{ cls

                cls: 'container',

                // }}}
                // {{{ items

                items: [{

                    // {{{ autoScroll

                    autoScroll: true,

                    // }}}
                    // {{{ xtype

                    xtype: 'indexcontainer',

                    // }}}
                    // {{{ classData

                    classData: Docs.overviewData

                    // }}}

                },{

                    // {{{ xtype

                    xtype: 'classcontainer'

                    // }}}

                },{

                    // {{{ autScroll

                    autoScroll: true,

                    // }}}
                    // {{{ xtype

                    xtype: 'container',

                    // }}}
                    // {{{ id

                    id: 'guide'

                    // }}}

                }]

                // }}}

            }

            // }}}

        }];

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
