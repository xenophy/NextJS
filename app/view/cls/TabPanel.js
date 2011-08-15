/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS Documentation
 *
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ Docs.view.cls.TabPanel

Ext.define('Docs.view.cls.TabPanel', {

    // {{{ extend

    extend: 'Ext.tab.Panel',

    // }}}
    // {{{ alias

    alias: 'widget.classtabpanel',

    // }}}
    // {{{ requires

    requires: [
        'Docs.view.cls.Overview'
    ],

    // }}}
    // {{{ plain

    plain: true,

    // }}}
    // {{{ listeners

    listeners: {
        beforetabchange: function(tabPanel, newCard, oldCard) {
            oldCard.prevScroll = oldCard.body.getScroll()['top'];
        },
        tabchange: function(tabPanel, newCard, oldCard) {
            if (newCard.prevScroll) {
                newCard.body.scrollTo('top', newCard.prevScroll);
            }
        }
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
