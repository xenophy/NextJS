/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS Documentation
 *
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ Docs.model.Favorite

Ext.define('Docs.model.Favorite', {

    // {{{ fields

    fields: ['id', 'cls'],

    // }}}
    // {{{ extend

    extend: 'Ext.data.Model',

    // }}}
    // {{{ proxy

    proxy: {
        type: ('localStorage' in window && window['localStorage'] !== null) ? 'localstorage' : 'memory',
        id  : 'docs-favorites'
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