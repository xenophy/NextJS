/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS Documentation
 *
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ Docs.view.search.Dropdown

Ext.define('Docs.view.search.Dropdown', {

    // {{{ exntend

    extend: 'Ext.view.View',

    // }}}
    // {{{ aliase

    alias: 'widget.searchdropdown',

    // }}}
    // {{{ floating

    floating: true,

    // }}}
    // {{{ autoShow

    autoShow: false,

    // }}}
    // {{{ autoRender

    autoRender: true,

    // }}}
    // {{{ toFrontOnShow

    toFrontOnShow: true,

    // }}}
    // {{{ focusOnToFront

    focusOnToFront: false,

    // }}}
    // {{{ store

    store: 'Search',

    // }}}
    // {{{ id

    id: 'search-dropdown',

    // }}}
    // {{{ overItemCls

    overItemCls:'x-view-over',

    // }}}
    // {{{ trackOver

    trackOver: true,

    // }}}
    // {{{ itemSelector

    itemSelector:'div.item',

    // }}}
    // {{{ singleSelect

    singleSelect: true,

    // }}}
    // {{{ initComponent

    initComponent: function() {

        this.tpl = new Ext.XTemplate(
            '<tpl for=".">',
                '<div class="item {type}">',
                    '<div class="title">{member}</div>',
                    '<div class="class">{cls}</div>',
                '</div>',
            '</tpl>',
            '<div class="total">{[values.length]} of {[this.getTotal()]}</div>',
            {
                getTotal: Ext.bind(this.getTotal, this)
            }
        );

        this.callParent(arguments);

    },

    // }}}
    // {{{ setTotal

    setTotal: function(total) {

        this.total = total;

    },

    // }}}
    // {{{ getTotal

    getTotal: function() {

        return this.total;

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
