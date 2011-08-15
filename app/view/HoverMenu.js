/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS Documentation
 *
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ Docs.view.HoverMenuButton

Ext.define('Docs.view.HoverMenu', {

    // {{{ exntend

    extend: 'Ext.view.View',

    // }}}
    // {{{ componentCls

    componentCls: 'hover-menu',

    // }}}
    // {{{ itemSelector

    itemSelector: 'div.item',

    // }}}
    // {{{ deferEmptyText

    deferEmptyText: false,

    // }}}
    // {{{ renderTo

    renderTo: Ext.getBody(),

    // }}}
    // {{{ columnHeight

    columnHeight: 25,

    // }}}
    // {{{ showCloseButtons

    showCloseButtons: false,

    // }}}
    // {{{ initComponent

    initComponent: function() {
        this.tpl = new Ext.XTemplate(
            '<table>',
            '<tr>',
                '<td>',
                '<tpl for=".">',
                    '<div class="item">',
                        '{[this.renderLink(values)]}',
                        '<tpl if="this.showCloseButtons">',
                            '<a class="close" href="#" rel="{cls}">x</a>',
                        '</tpl>',
                    '</div>',
                    // Start new column when columnHeight reached
                    '<tpl if="xindex % this.columnHeight === 0 && xcount &gt; xindex">',
                        '</td><td>',
                    '</tpl>',
                '</tpl>',
                '</td>',
            '</tr>',
            '</table>',
            {
                columnHeight: this.columnHeight,
                showCloseButtons: this.showCloseButtons,
                renderLink: function(values) {
                    var url = values.url || values.cls;
                    var label = values.label || values.cls;
                    return Ext.String.format('<a href="#/api/{0}" rel="{0}" class="docClass">{1}</a>', url, label);
                }
            }
        );

        this.callParent();
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
