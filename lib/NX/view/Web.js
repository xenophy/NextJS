/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.view.Web

NX.define('NX.view.Web', {

    // {{{ alternateClassName

    alternateClassName: 'NX.WebView',

    // }}}
    // {{{ extend

    extend: 'NX.view.AbstractView',

    // }}}
    // {{{ statics

    statics: {

        // {{{ mimetype

        mimetype: require('./Web/statics/mimetype'),

        // }}}
        // {{{ errorDocument

        errorDocument: require('./Web/statics/errorDocument'),

        // }}}
        // {{{ etag

        etag : require('./Web/statics/etag')

        // }}}

    },

    // }}}
    // {{{ tplExts

    tplExts: require('./Web/tplExts'),

    // }}}
    // {{{ constructor

    constructor: require('./Web/constructor'),

    // }}}
    // {{{ loadFile

    loadFile: require('./Web/loadFile'),

    // }}}
    // {{{ render

    render: require('./Web/render'),

    // }}}
    // {{{ error

    error : require('./Web/error')

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
