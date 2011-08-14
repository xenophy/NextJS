/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS GitHub Pages
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ Loader Settings

Ext.Loader.setConfig({
    enabled: true,
    paths: {
        'Docs': 'app'
    }
});

// }}}
// {{{ requires

Ext.require('Docs.Application');

// }}}
// {{{ Ext.onReady

Ext.onReady(function() {
    Ext.create('Docs.Application');
});

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
