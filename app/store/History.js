/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS Documentation
 *
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ Docs.store.History

Ext.define('Docs.store.History', {

    // {{{ exntend

    extend: 'Ext.data.Store',

    // }}}
    // {{{ model

    model: 'Docs.model.History',

    // }}}
    // {{{ sorters

    sorters: [{
        property: 'id',
        direction: 'DESC'
    }]

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
