/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS Documentation
 *
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ Docs.store.Search

Ext.define('Docs.store.Search', {

    // {{{ exntend

    extend: 'Ext.data.Store',

    // }}}
    // {{{ fields

    fields: ['cls', 'member', 'type', 'xtypes'],

    // }}}
    // {{{ proxy

    proxy: {
        type: 'memory',
        reader: {
            type: 'json'
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
