/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS Documentation
 *
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ Docs.view.cls.Header

Ext.define('Docs.view.cls.Header', {

    // {{{ extend

    extend: 'Ext.container.Container',

    // }}}
    // {{{ padding

    padding: '5 0 17 0',

    // }}}
    // {{{ height

    height: 47,

    // }}}
    // {{{ alias

    alias: 'widget.classheader',

    // }}}
    // {{{ tpl

    tpl: Ext.create('Ext.XTemplate',
        '<h1 class="{[this.getClass(values)]}">',
            '<tpl if="private">',
                '<span class="private">Private</span>',
            '</tpl>',
            '<a href="source/{href}" target="_blank">{name}</a>',
            '<tpl if="xtypes.length &gt; 0">',
                '<span>xtype: {[values.xtypes.join(", ")]}</span>',
            '</tpl>',
        '</h1>',
        {
            getClass: function(cls) {
                if (cls.component) {
                    return "component";
                }
                else if (cls.singleton) {
                    return "singleton";
                }
                else {
                    return "class";
                }
            }
        }
    ),

    // }}}
    // {{{ load

    load: function(cls) {
        this.update(this.tpl.apply(cls));
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
